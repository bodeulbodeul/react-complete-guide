import { Dispatch, PropsWithChildren, createContext, useContext, useReducer } from "react";
import Todo from "../models/todo";

// <Todo[]> 객체 타입 정의 ([]) 초기값
export const TodoContext = createContext<Todo[]>([]);

export const TodoDispatchContext = createContext<Dispatch<ActionType> | null>(null);

export default function TodoProvider(props: PropsWithChildren) {
  const [todos, dispatch] = useReducer(todoReducer, []);

  return (
    <TodoContext.Provider value={todos}>
      <TodoDispatchContext.Provider value={dispatch}>{props.children}</TodoDispatchContext.Provider>
    </TodoContext.Provider>
  );
}

export function useTodo() {
  return useContext(TodoContext);
}

export function useTodoDispatch() {
  const dispatch = useContext(TodoDispatchContext);
  if (!dispatch) throw new Error("Cannot find TodoDispatchContext"); // 유효하지 않을땐 에러를 발생
  return dispatch;
}

type ActionType =
  | { type: "ADDED"; text: string }
  | { type: "CHANGED"; id: string; todo: Todo }
  | { type: "DELETE"; id: string };

function todoReducer(state: Todo[], action: ActionType) {
  switch (action.type) {
    case "ADDED": {
      return [new Todo(action.text), ...state];
    }
    case "CHANGED": {
      return state.map((s) => {
        if (s.id === action.id) return action.todo;
        else return s;
      });
    }
    case "DELETE": {
      return state.filter((s) => s.id !== action.id);
    }
    default: {
      throw Error("알 수 없는 동작");
    }
  }
}
