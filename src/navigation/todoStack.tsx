import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import TodoListScreen from 'screens/TodoListScreen';
import TodoListDetailScreen from 'screens/TodoListDetailScreen';
import {RootStackParamList} from 'navigation/_types.ts';

function TodoStack() {
  const Stack = createNativeStackNavigator<RootStackParamList>();
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName="TodoList">
      <Stack.Screen name="TodoList" component={TodoListScreen} />
      <Stack.Screen name="TodoListDetail" component={TodoListDetailScreen} />
    </Stack.Navigator>
  );
}

export default TodoStack;
