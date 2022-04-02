import messaging from '@react-native-firebase/messaging';
import { EventRegister } from 'react-native-event-listeners';

export const PUSH_NOTIFICATION_RECEIVED_EVENT = 'pushNotificationReceivedEvent';

export const setupPushNotifications = async () => {
	try {
		await messaging().requestPermission();
		const fcmToken = await messaging().getToken();
		console.log('FIREBASE TOKEN: ', fcmToken);

		messaging().onNotificationOpenedApp((remoteMessage) => {
			console.log('onNotification OpenedApp', remoteMessage);
			EventRegister.emit(PUSH_NOTIFICATION_RECEIVED_EVENT, remoteMessage);
		});

		const notificationOpen = await messaging().getInitialNotification();
		if (notificationOpen) {
			console.log('onNotification OpenedApp', notificationOpen);
			EventRegister.emit(PUSH_NOTIFICATION_RECEIVED_EVENT, notificationOpen);
		}
		return notificationOpen;
	} catch (e) {
		console.log(e);
	}
};
