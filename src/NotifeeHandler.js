import notifee from '@notifee/react-native';
import messaging from '@react-native-firebase/messaging';

export async function onNotificationOpenedApp(notification) {
  // Your code here to handle when the user opens the notification
}

export async function onBackgroundNotification(remoteMessage) {
  const settings = await messaging().getNotificationSettings();
  const authorized = settings.authorizationStatus === messaging.AuthorizationStatus.AUTHORIZED;

  if (authorized) {
    await notifee.displayNotification({
      title: remoteMessage.notification.title,
      body: remoteMessage.notification.body,
      android: {
        channelId: 'default',
        pressAction: {
          id: 'default',
          launchActivity: 'DEFAULT',
        },
      },
    });
  }
}

messaging().setBackgroundMessageHandler(onBackgroundNotification);

