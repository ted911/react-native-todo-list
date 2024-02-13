import messaging from '@react-native-firebase/messaging';
import {useEffect} from 'react';
import {Alert} from 'react-native';

export const useForegroundMessage = () => {
  const getFcmToken = async () => {
    const fcmToken = await messaging().getToken();
    if (fcmToken) {
      console.log('Your Firebase Token is:', fcmToken);
    } else {
      console.log('Failed', 'No token received');
    }
  };
  const onMessage = () =>
    messaging().onMessage(async remoteMessage => {
      Alert.alert('A new FCM message arrived!', JSON.stringify(remoteMessage));
    });

  useEffect(() => {
    getFcmToken();
    const unsubscribe = onMessage();
    return unsubscribe;
  }, []);
};
export const useBackgroundMessage = () => {
  messaging().setBackgroundMessageHandler(async remoteMessage => {
    console.log('Message handled in the background!', remoteMessage);
  });
};
