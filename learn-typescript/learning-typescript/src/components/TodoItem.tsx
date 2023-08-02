import Todo from "../models/todo";
import { useTodoDispatch } from "../store/TodoProvider";
import classes from "./TodoItem.module.css";

type Props = {
  item: Todo;
};

export default function TodoItem(props: Props) {
  const dispatch = useTodoDispatch();

  const handleDelete = (id: string) => {
    dispatch({ type: "DELETE", id });
  };

  const { id, text } = props.item;

  return (
    <li className={classes.item} onClick={handleDelete.bind(null, id)} key={id}>
      {text}
    </li>
  );
}
