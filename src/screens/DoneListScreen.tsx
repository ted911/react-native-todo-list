import {NativeStackScreenProps} from '@react-navigation/native-stack';
import DoneList from 'components/DoneList';
import {TopTabParamList} from 'navigation/_types';
import {View} from 'react-native';
import {useDones} from 'stores/todoStore';

interface DoneListScreenProps
  extends NativeStackScreenProps<TopTabParamList, 'DoneList'> {}
const DoneListScreen = ({}: DoneListScreenProps) => {
  const doneList = useDones();
  return (
    <View
      style={{flex: 1, alignItems: 'center', justifyContent: 'space-between'}}>
      <DoneList data={doneList} />
    </View>
  );
};
export default DoneListScreen;
