import React, { useEffect } from 'react';
import JitsiMeet, { JitsiMeetView } from 'react-native-jitsi-meet';
import { connect } from 'react-redux';
import { CALL_TYPE, CALL_STATUS } from '../../config/constants';
import { startCall, getReceiverStatus } from '../../common/services/call';

const CallScreen = (props) => {
    const call_type = props.route.params.type; // 'incoming', 'outgoing'
    const IncomingCallData = props.route.params.IncomingCallData || {};
    const OutgoingCallReceiver = props.route.params.OutgoingCallReceiver || {};

    useEffect(() => {
        init();
        return () => {
            JitsiMeet.endCall();
        }
    }, [])

    const init = () => {
        if (call_type == CALL_TYPE.outgoing) {
            initiateCall();
        }
        else { // incoming
            _joinChannel(IncomingCallData.channelId);
        }
    }

    // outgoing
    const initiateCall = async () => {
        const receiverStatus = await getReceiverStatus(OutgoingCallReceiver.id);
        if (receiverStatus != CALL_STATUS.calling && receiverStatus != CALL_STATUS.joined) {
            let channelId = await startCall(props.user, OutgoingCallReceiver);
            if (channelId) {
                _joinChannel(channelId);
                return;
            }
        }

        onError();
    }

    const onError = () => {
        props.navigation.goBack();
    }

    const _joinChannel = (channelId) => {
        const url = `https://meet.jit.si/${channelId}`;
        JitsiMeet.call(url, props.user);
    }

    const _onConferenceTerminated = (nativeEvent) => {
        /* Conference terminated event */
        console.log(nativeEvent);
        props.navigation.goBack();
    }

    const _onConferenceJoined = (nativeEvent) => {
        /* Conference joined event */
        console.log(nativeEvent)
    }

    const _onConferenceWillJoin = (nativeEvent) => {
        /* Conference will join event */
        console.log(nativeEvent)
    }

    return (
        <JitsiMeetView
            onConferenceTerminated={e => _onConferenceTerminated(e)}
            onConferenceJoined={e => _onConferenceJoined(e)}
            onConferenceWillJoin={e => _onConferenceWillJoin(e)}
            style={{
                flex: 1,
                height: '100%',
                width: '100%',
            }}
        />
    )
}

const mapStateToProps = ({ app }) => ({
    isLoggedIn: app.isLoggedIn,
    user: app.user,
});

export default connect(
    mapStateToProps,
    {},
)(CallScreen);