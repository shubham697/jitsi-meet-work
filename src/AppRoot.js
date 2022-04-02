import React, { useEffect, useState } from 'react';
import { EventRegister } from 'react-native-event-listeners';
import messaging from '@react-native-firebase/messaging';
import { Provider } from 'react-redux';
import Routes from './routes';
import store from './store';
import RouteNames from './routes/names';
import { CALL_TYPE } from './config/constants';
import { PUSH_NOTIFICATION_RECEIVED_EVENT, setupPushNotifications } from './common/services/pushNoti';

const AppRoot = (props) => {

    useEffect(() => {
        init();
    }, [])

    const init = async () => {
        setupNotificationListener();

        await setupPushNotifications();

        messaging().onMessage(async (remoteMessage) => {
            EventRegister.emit(PUSH_NOTIFICATION_RECEIVED_EVENT, remoteMessage);
        });

        messaging().setBackgroundMessageHandler(async (remoteMessage) => {
            EventRegister.emit(PUSH_NOTIFICATION_RECEIVED_EVENT, remoteMessage);
        });
    }

    const setupNotificationListener = () => {
        EventRegister.addEventListener(
            PUSH_NOTIFICATION_RECEIVED_EVENT,
            async (notification) => {
                onNotificationOpened(notification);
            }
        );
    };

    const onNotificationOpened = async (notification) => {
        if (notification && notification.data) {
            switch (notification.data.type) {
                case 'incoming_call': {
                    try {
                        props.navigation.navigate(RouteNames.CallScreen, {
                            type: CALL_TYPE.incoming,
                            IncomingCallData: notification.data
                        });
                    } catch (error) {
                        console.log('incoming_call', error);
                    }
                    break;
                }
                default: {
                }
            }
        }
    };

    return (
        <Routes />
    );
};

export default AppRoot;
