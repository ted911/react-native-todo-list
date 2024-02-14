import WebView from 'react-native-webview';
import {Alert} from 'react-native';
import CookieManager from '@react-native-cookies/cookies';

interface RNToWebviewMessage {
  type: 'RN' | 'WEBVIEW';
  data: any;
}
CookieManager.set('http://5.0.50.135:3000', {
  name: 'customCookie',
  value: 'tedd911',
});
// CookieManager.clearAll();
const WebViewScreen = () => {
  const rnToWebview: RNToWebviewMessage = {
    type: 'RN',
    data: {message: 'Hello React!'},
  };
  const beforeContentLoaded = `
    window.isNativeApp = true;
    true;
`;
  const handleOnMessage = (event: any) => {
    console.log('nativeEvent', event);
    Alert.alert('nativeEvent', JSON.stringify(event.nativeEvent.data));
  };
  return (
    <WebView
      injectedJavaScriptBeforeContentLoaded={beforeContentLoaded}
      source={{
        uri: 'http://5.0.50.135:3000',
        headers: {
          'setup-rn-header': 'this-is-custom-header',
          Cookie: 'cookie1=this-is-custom-cookie;',
        },
      }}
      sharedCookiesEnabled={true}
      onMessage={handleOnMessage}
    />
  );
};
export default WebViewScreen;
