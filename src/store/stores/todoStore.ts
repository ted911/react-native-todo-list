import {Todo} from 'components/TodoList';
import {create} from 'zustand';

interface TodoState {
  todos: Todo[];
  actions: {
    addTodo: (todo: Todo) => void;
    removeTodo: (id: number) => void;
    updateTodo: (todo: Todo) => void;
  };
}
export const getCurrent = (todos: Todo[]) => todos[todos.length - 1];
const todoStore = create<TodoState>()(set => ({
  todos: [],
  actions: {
    addTodo: (todo: Todo) => set(({todos}) => ({todos: [todo, ...todos]})),
    removeTodo: (id: number) =>
      set(({todos}) => ({todos: todos.filter(todo => todo.id !== id)})),
    updateTodo: (todo: Todo) =>
      set(({todos}) => {
        const index = todos.findIndex(t => t.id === todo.id);
        todos[index] = todo;
        return {todos: [...todos]};
      }),
  },
}));
export const useTodoActions = () => todoStore(store => store.actions);
export const useTodos = () =>
  todoStore(store => store.todos.filter(todo => !todo.done));
export const useDones = () =>
  todoStore(store => store.todos.filter(todo => todo.done));
export const useTodoState = () => todoStore.getState();
