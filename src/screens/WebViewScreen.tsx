import WebView from 'react-native-webview';
import {Alert} from 'react-native';

const WebViewScreen = () => {
  const handleOnMessage = (nativeEvent: any) => {
    console.log('nativeEvent', nativeEvent);
    Alert.alert('nativeEvent', JSON.stringify(nativeEvent));
  };
  return (
    <WebView
      onMessage={handleOnMessage}
      source={{uri: 'http://5.0.50.118:3000'}}
    />
  );
};
export default WebViewScreen;
