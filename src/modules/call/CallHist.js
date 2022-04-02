import React, { useEffect, useState, useRef } from 'react';
import { StyleSheet, TouchableOpacity, StatusBar, View, Text, FlatList, Image, SafeAreaView } from 'react-native';
import { connect } from 'react-redux';
import FastImage from "react-native-fast-image";
import { setAllCallChannels } from '../../store/actions/chat';
import { CALL_HISTORY, CALL_TYPE } from "../../config/constants";
import { call_channel_collection } from '../../common/services/call';
import RouteNames from '../../routes/names';
import Theme from "../../theme";
import { CallHistStyles } from './styles';

const CallHistScreen = (props) => {
    const _listener = useRef(null);
    const [channels, setChannels] = useState(CALL_HISTORY || []);
    useEffect(() => {
        getCallChannelsListner();
        return () => {
            if (_listener.current) {
                _listener.current();
            }
        }
    }, [])

    const getCallChannelsListner = () => {
        const user_id = props.user.id
        _listener.current = call_channel_collection.where('users', 'array-contains', user_id).orderBy('createdAt', 'desc')
            .onSnapshot(
                (snapshots) => {
                    var tmp_channels = [];
                    snapshots.forEach((doc) => {
                        tmp_channels.push(doc.data());
                    });
                    // setChannels(tmp_channels);
                },
                (error) => {
                    console.log('channel listener error', error)
                });
    }

    return (
        <View style={CallHistStyles.container}>
            <StatusBar backgroundColor={'transparent'} />
            <FlatList
                style={CallHistStyles.listContainer}
                data={channels}
                numColumns={1}
                renderItem={({item}) => {
                    let lastCallColor;
                    let lastCallText;
                    if (item.missedCount > 0) {
                        lastCallColor = '#F55A00';
                        lastCallText = "" + item.missedCount + " Missed Call" + (item.missedCount > 0 ? 's' : '');
                    } else if (item.lastCall === 'Incoming') {
                        lastCallColor = '#00C22D';
                        lastCallText = 'Incoming';
                    }
                    else {
                        lastCallColor = '#23CBD8';
                        lastCallText = 'Outgoing';
                    }

                    return (
                        <TouchableOpacity style={CallHistStyles.callItemContainer}
                            onPress={() => {
                                props.navigation.navigate(RouteNames.CallScreen, {
                                    type: CALL_TYPE.outgoing,
                                    OutgoingCallReceiver: {
                                        id: item.id,
                                        displayName: item.name,
                                        email: item.email,
                                        avatar: item.avatar
                                    }
                                });
                            }}
                        >
                            <FastImage
                                style={CallHistStyles.avatar}
                                source={{ uri: item.avatar }}
                                resizeMode={FastImage.resizeMode.contain} />
                            <View style={{ flex: 1 }}>
                                <View style={{ flexDirection: 'row' }}>
                                    <Text style={CallHistStyles.name}>{item.name}</Text>
                                    <Text style={CallHistStyles.time}>{item.time}</Text>
                                </View>
                                <View style={{ flexDirection: 'row', marginTop: 5, alignItems: 'center' }}>
                                    <Text style={[CallHistStyles.callType, { color: lastCallColor }]}>{lastCallText}</Text>
                                </View>
                            </View>
                        </TouchableOpacity>
                    );
                }}
                ItemSeparatorComponent={() => <View style={CallHistStyles.spaceCol} />}
                ListFooterComponent={() => <View style={CallHistStyles.spaceCol} />}
            />
        </View>
    );
}

const mapStateToProps = ({ app }) => ({
    isLoggedIn: app.isLoggedIn,
    user: app.user,
});

export default connect(
    mapStateToProps,
    {
        setAllCallChannels
    },
)(CallHistScreen);
