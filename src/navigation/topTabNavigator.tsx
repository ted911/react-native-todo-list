import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import DoneListScreen from 'screens/DoneListScreen';
import {TopTabParamList} from './_types';
import TodoStack from './todoStack';

const Tab = createMaterialTopTabNavigator<TopTabParamList>();

const TopTabNavigator = () => {
  return (
    <Tab.Navigator initialRouteName="TodoList">
      <Tab.Screen name="todoList" component={TodoStack} />
      <Tab.Screen name="DoneList" component={DoneListScreen} />
    </Tab.Navigator>
  );
};
export default TopTabNavigator;
