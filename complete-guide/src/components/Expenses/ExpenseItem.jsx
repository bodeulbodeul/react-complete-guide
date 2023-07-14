import { useState } from "react";
import Card from "../UI/Card";
import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";

export default function ExpendseItem(props) {
  const [title, setTitle] = useState(props.title);
  const handleClick = (e) => {
    setTitle("title change");
  };

  return (
    <li>
      <Card className="expense-item">
        <ExpenseDate date={props.date} />
        <div className="expense-item__description">
          <h2>{title}</h2>
          <div className="expense-item__price">${props.amount}</div>
          <button onClick={handleClick}>Change Title</button>
        </div>
      </Card>
    </li>
  );
}
