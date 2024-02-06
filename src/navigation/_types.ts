export interface RootStackParamList {
  [key: string]: undefined | {id: number; title: string; done: boolean};
  TodoList: undefined;
  TodoListDetail: {id: number; title: string; done: boolean};
}
export interface TopTabParamList {
  [key: string]: undefined;
  '할일 목록': undefined;
  '완료된 목록': undefined;
}
