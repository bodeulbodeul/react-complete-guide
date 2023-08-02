import { useTodo } from "../store/TodoProvider";
import TodoItem from "./TodoItem";
import classes from "./Todos.module.css";

export default function Todos() {
  const items = useTodo();
  return (
    <ul className={classes.todos}>
      {items.map((item) => (
        <TodoItem key={item.id} item={item} />
      ))}
    </ul>
  );
}
