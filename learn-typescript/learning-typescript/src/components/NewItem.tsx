import { useState } from "react";
import { useTodoDispatch } from "../store/TodoProvider";
import classes from "./NewTodo.module.css";

export default function NewItem() {
  const dispatch = useTodoDispatch();

  const [todo, setTodo] = useState("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTodo(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    if (todo?.trim().length === 0) {
      return;
    }

    dispatch({ type: "ADDED", text: todo.trim() });
  };

  return (
    <form onSubmit={handleSubmit} className={classes.form}>
      <label htmlFor="text2">New Todo</label>
      <input type="text" id="text2" onChange={handleChange} value={todo} />
      <button type="submit">Add Todo</button>
      <button type="reset">Clear</button>
    </form>
  );
}
