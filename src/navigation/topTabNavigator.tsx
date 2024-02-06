import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import TodoListScreen from 'screens/TodoListScreen';
import DoneListScreen from 'screens/DoneListScreen';
import {TopTabParamList} from './_types';

const Tab = createMaterialTopTabNavigator<TopTabParamList>();

const TopTabNavigator = () => {
  return (
    <Tab.Navigator initialRouteName="TodoList">
      <Tab.Screen name="할일 목록" component={TodoListScreen} />
      <Tab.Screen name="완료된 목록" component={DoneListScreen} />
    </Tab.Navigator>
  );
};
export default TopTabNavigator;
