import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React from 'react';
import {Text, View} from 'react-native';
import {RootStackParamList} from 'navigation/_types.ts';

interface HomeScreenProps
  extends NativeStackScreenProps<RootStackParamList, 'Home'> {}
function HomeScreen({navigation}: HomeScreenProps): React.JSX.Element {
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <Text>여기는 홈 스크린입니다.</Text>
    </View>
  );
}
export default HomeScreen;
