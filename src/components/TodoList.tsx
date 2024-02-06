import React from 'react';
import {Button, FlatList, Text, View} from 'react-native';
import {useTodoActions} from 'stores/todoStore';

export type Todo = {
  id: number;
  title: string;
  done: boolean;
};
interface TodoListProps {
  data: Todo[];
}
interface TodoListItemProps extends Todo {}

const TodoListItem = (todo: TodoListItemProps) => {
  const {id, title} = todo;
  const {updateTodo} = useTodoActions();
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
        padding: 10,
      }}>
      <Text>{id}</Text>
      <Text>{title}</Text>
      <Button
        title={'완료'}
        onPress={() => updateTodo({...todo, done: !todo.done})}
      />
    </View>
  );
};

const TodoList = ({data}: TodoListProps) => {
  return (
    <FlatList
      style={{flex: 1, width: '100%'}}
      data={data}
      renderItem={({item}) => <TodoListItem {...item} />}
      keyExtractor={(item, index) => `${index}-${item.title}`}
    />
  );
};
export default TodoList;
