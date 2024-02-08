import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {RootStackParamList} from './_types';
import BottomTabNavigator from './bottomTabNavigator';

const BaseNavigator = () => {
  const Stack = createNativeStackNavigator<RootStackParamList>();
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName="Base">
      <Stack.Screen name="Base" component={BottomTabNavigator} />
    </Stack.Navigator>
  );
};
export default BaseNavigator;
