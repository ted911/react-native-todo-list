import WebView from 'react-native-webview';
import {Alert} from 'react-native';

interface RNToWebviewMessage {
  type: 'RN' | 'WEBVIEW';
  data: any;
}
const WebViewScreen = () => {
  const rnToWebview: RNToWebviewMessage = {
    type: 'RN',
    data: {message: 'Hello React!'},
  };
  const handleOnMessage = (event: any) => {
    console.log('nativeEvent', event);
    Alert.alert('nativeEvent', JSON.stringify(event.nativeEvent.data));
  };
  const runFirst = `window.isNativeApp = true;
true;
`;
  return (
    <WebView
      onMessage={handleOnMessage}
      source={{
        uri: 'http://5.0.50.118:3000',
        headers: {'setup-rn-header': 'this-is-custom-header'},
        Cookie: 'setup-rn-cookie=this-is-custom-cookie',
      }}
      sharedCookiesEnabled={true}
    />
  );
};
export default WebViewScreen;
