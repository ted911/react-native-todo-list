import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import DoneListScreen from 'screens/DoneListScreen';
import {TopTabParamList} from './_types';
import TodoStack from './todoStack';
import WebViewScreen from 'screens/WebViewScreen';

const Tab = createMaterialTopTabNavigator<TopTabParamList>();

const TopTabNavigator = () => {
  return (
    <Tab.Navigator initialRouteName="TodoList">
      <Tab.Screen name="할일 목록" component={TodoStack} />
      <Tab.Screen name="완료된 목록" component={DoneListScreen} />
      <Tab.Screen name="webView" component={WebViewScreen} />
    </Tab.Navigator>
  );
};
export default TopTabNavigator;
