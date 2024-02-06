/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import {NavigationContainer} from '@react-navigation/native';
import TopTabNavigator from 'navigation/topTabNavigator';
import React from 'react';

function App(): React.JSX.Element {
  return (
    <NavigationContainer>
      <TopTabNavigator />
    </NavigationContainer>
  );
}

export default App;
