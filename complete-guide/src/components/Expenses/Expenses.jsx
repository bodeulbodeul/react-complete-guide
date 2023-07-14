import { useState } from "react";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpenseFilter";
import "./Expenses.css";
import ExpensesList from "./ExpensesList";
import ExpenseChart from "./ExpenseChart";

export default function Expenses(props) {
  const [filter, setFilter] = useState("2020");

  const filterChangeHandle = (selectedFilter) => {
    setFilter(selectedFilter);
  };

  const filteredExpenses = props.items.filter((item) => {
    return item.date.getFullYear().toString() === filter;
  });

  return (
    <Card className="expenses">
      <ExpensesFilter onFilterChange={filterChangeHandle} value={filter} />
      <ExpenseChart expenses={filteredExpenses} />
      <ExpensesList items={filteredExpenses} />
    </Card>
  );
}
