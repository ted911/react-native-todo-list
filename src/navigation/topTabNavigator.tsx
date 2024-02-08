import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import DoneListScreen from 'screens/DoneListScreen';
import {TopTabParamList} from './_types';
import TodoStack from './todoStack';
import WebViewScreen from 'screens/WebViewScreen';

const Tab = createMaterialTopTabNavigator<TopTabParamList>();

const TopTabNavigator = () => {
  return (
    <Tab.Navigator style={{paddingTop: 20}} initialRouteName="TodoList">
      <Tab.Screen name="todoList" component={TodoStack} />
      <Tab.Screen name="DoneList" component={DoneListScreen} />
      <Tab.Screen name="webView" component={WebViewScreen} />
    </Tab.Navigator>
  );
};
export default TopTabNavigator;
