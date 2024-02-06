import {useTodoActions} from 'stores/todoStore';
import {Todo} from './TodoList';
import {Button, FlatList, Text, View} from 'react-native';

interface DoneListProps {
  data: Todo[];
}
interface TodoListItemProps extends Todo {}

const DoneListItem = (todo: TodoListItemProps) => {
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
        title={'미완료'}
        onPress={() => updateTodo({...todo, done: !todo.done})}
      />
    </View>
  );
};
const DoneList = ({data}: DoneListProps) => {
  return (
    <FlatList
      style={{flex: 1, width: '100%'}}
      data={data}
      renderItem={({item}) => <DoneListItem {...item} />}
      keyExtractor={(item, index) => `${index}-${item.title}`}
    />
  );
};
export default DoneList;
