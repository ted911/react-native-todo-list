// interface ScreenParams {
//   title: string;
// }
interface StackParamList {
  [key: string]: undefined;
  // [key: string]: Partial<ScreenParams>;
}
export interface RootStackParamList extends StackParamList {
  Event: undefined;
  Feed: undefined;
  Home: undefined;
  Benefit: undefined;
  Mypage: undefined;
}
export interface TopTabParamList extends StackParamList {
  TodoList: undefined;
  DoneList: undefined;
  WebView: undefined;
}
export interface BottomTabParamList extends StackParamList {
  Event: undefined;
  Feed: undefined;
  Home: undefined;
  Benefit: undefined;
  MyPage: undefined;
}
