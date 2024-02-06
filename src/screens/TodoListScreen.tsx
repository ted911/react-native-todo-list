import React, {useState} from 'react';
import {Button, View, TextInput} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from 'navigation/_types.ts';
import TodoList, {Todo} from 'components/TodoList.tsx';
import {useTodoActions, useTodos} from 'stores/todoStore';

interface TodoListScreenProps
  extends NativeStackScreenProps<RootStackParamList, 'TodoList'> {}
function TodoListScreen({}: TodoListScreenProps) {
  const [text, setText] = useState<string>('');
  const {addTodo} = useTodoActions();
  const todos = useTodos();
  const handlePressAddBtn = (text: string, todos: Todo[]) => {
    let todo: Todo;
    if (todos.length === 0) {
      todo = {
        id: 1,
        title: text,
        done: false,
      };
    } else {
      todo = {
        id: todos.length + 1,
        title: text,
        done: false,
      };
    }
    addTodo(todo);
  };
  return (
    <View
      style={{flex: 1, alignItems: 'center', justifyContent: 'space-between'}}>
      <TodoList data={todos} />
      <View
        style={{
          flex: 0.1,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-around',
          width: '100%',
          borderTopWidth: 0.5,
          borderTopColor: 'black',
        }}>
        <TextInput
          style={{flex: 0.9, borderWidth: 0.5, padding: 10, borderRadius: 10}}
          placeholder={'할일 입력'}
          onChangeText={newText => setText(newText)}
          defaultValue={text}
        />
        <Button title={'+'} onPress={() => handlePressAddBtn(text, todos)} />
      </View>
    </View>
  );
}
export default TodoListScreen;
