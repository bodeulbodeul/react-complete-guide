import ExpendseItem from "./ExpenseItem";
import "./ExpensesList.css";

export default function ExpensesList(props) {
  if (props.items.length === 0) return <h2 className="expenses-list__fallback">Found no expenses.</h2>;

  return (
    <ul className="expenses-list">
      {props.items.map((item) => (
        <ExpendseItem key={item.id} title={item.title} amount={item.amount} date={item.date} />
      ))}
    </ul>
  );
}
