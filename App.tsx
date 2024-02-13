/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import {NavigationContainer} from '@react-navigation/native';
import {useForegroundMessage} from 'hooks/useFirebaseMessage';
import BaseNavigator from 'navigation/BaseNavigator';
import React from 'react';
import messaging from '@react-native-firebase/messaging';

messaging().setBackgroundMessageHandler(async remoteMessage => {
  console.log('Message handled in the background!', remoteMessage);
});

function App(): React.JSX.Element {
  useForegroundMessage();
  return (
    <NavigationContainer>
      <BaseNavigator />
    </NavigationContainer>
  );
}

export default App;
