/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import {NavigationContainer} from '@react-navigation/native';
import BaseNavigator from 'navigation/BaseNavigator';
import React from 'react';

function App(): React.JSX.Element {
  return (
    <NavigationContainer>
      <BaseNavigator />
    </NavigationContainer>
  );
}

export default App;
