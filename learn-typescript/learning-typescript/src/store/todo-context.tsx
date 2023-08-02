// 강사버전

import { PropsWithChildren, createContext, useState } from "react";
import Todo from "../models/todo";

type TodoContextObj = {
  items: Todo[];
  addTodo: (text: string) => void;
  removeTodo: (id: string) => void;
};

export const TodoContext = createContext<TodoContextObj>({
  items: [],
  addTodo: (text: string) => {},
  removeTodo: (id: string) => {},
});

export default function TodoProvider(props: PropsWithChildren) {
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodoHandler = (text: string) => {
    setTodos((prev) => [new Todo(text), ...prev]);
  };

  const removeTodoHandler = (id: string) => {
    setTodos((prev) => {
      return prev.filter((todo) => todo.id !== id);
    });
  };

  const todoContext: TodoContextObj = {
    items: todos,
    addTodo: addTodoHandler,
    removeTodo: removeTodoHandler,
  };

  return <TodoContext.Provider value={todoContext}>{props.children}</TodoContext.Provider>;
}
