import firestore from '@react-native-firebase/firestore';
import apiFactory from '../../common/services/apiFactory'; 
import { CALL_STATUS } from '../../config/constants';

export const call_channel_collection = firestore().collection('call-channels');
export const call_user_status_collection = firestore().collection('call-user-status');

export const startCall = async (user, partner) => {
    try {
        let channelId = call_channel_collection.doc().id;

        let res = await apiFactory.post('call/send-incoming-call', {
            channel_id: channelId,
            receiver_id: partner.id
        });

        if (res.data && res.data.time) {
            await call_channel_collection.doc(channelId).set({
                id: channelId,
                status: CALL_STATUS.calling,
                caller: {
                    id: user.id,
                    username: user.username || null,
                    full_name: user.full_name || null,
                    photo: user.photo || null,
                    phone: user.phone || null,
                    email: user.email || null,
                },
                partner: {
                    id: partner.id,
                    username: partner.username || null,
                    full_name: partner.full_name || null,
                    photo: partner.photo || null,
                    phone: partner.phone || null,
                    email: partner.email || null,
                },
                users: [user.id, partner.id],
                createdAt: res.data.time,
                seen: {
                    [partner.id]: false
                }
            });

            await call_user_status_collection.doc(`${user.id}`).set({
                id : user.id,
                status : CALL_STATUS.calling
            });

            return channelId;
        }

        return null;
    }
    catch (error) {
        console.log('startCall error ', error)
        return null;
    }
};

export const getReceiverStatus = async (receiver_id) => {
    try {
        let channel_ref = await call_user_status_collection.doc(`${receiver_id}`).get();
        if (channel_ref.data()) {
            return channel_ref.data().status;
        }
        return null;
    }
    catch (error) {
        return null
    }
}

export const updateCallChannelStatus = async (channelId, user_id, status) => {
    call_channel_collection.doc(channelId).update('status', status);
    call_user_status_collection.doc(`${user_id}`).update('status', status);
}

export const getCallChannelData = async (channelId) => {
    try {
        let channel_ref = await call_channel_collection.doc(channelId).get();
        return channel_ref.data()
    }
    catch (error) {
        return null
    }
}

export const getCallHistory = async (user_id, partner_id) => {
    try {
        let channel_ref = await call_channel_collection
            .where('users', 'in', [[user_id, partner_id], [partner_id, user_id]])
            .get();
        let history = [];
        channel_ref.docs.forEach(doc => {
            if (doc.data() != null) {
                history.push(doc.data());
            }
        })
        return history;
    }
    catch (error) {
        console.log('getCallHistory', error)
        return [];
    }
}

export const seenCallChannel = async (channelData, user_id) => {
    try {
        if (channelData != null) {
            let seen = channelData.seen || {};
            seen[user_id] = true;
            await call_channel_collection.doc(channelData.id).update('seen', seen);

            return true;
        }
        return false;
    }
    catch (error) {
        console.log('seenCallChannel', error)
        return false;
    }
}