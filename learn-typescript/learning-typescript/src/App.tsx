import { useState } from "react";
import NewItem from "./components/NewItem";
import Todos from "./components/Todos";
import Todo from "./models/todo";
import TodoProvider from "./store/TodoProvider";

function App() {
  return (
    <TodoProvider>
      <NewItem />
      <Todos />
    </TodoProvider>
  );
}

export default App;
