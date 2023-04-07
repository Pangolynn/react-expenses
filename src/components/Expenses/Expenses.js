import ExpensesFilter from "./ExpensesFilter";
import Card from "../UI/Card";
import "./Expenses.css";
import { useState } from "react";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

const Expenses = ({ expenses, onRemove }) => {
  const [year, setYear] = useState("2022");
  const filteredExpenses = expenses.filter((expense) => {
    return expense.date.getFullYear().toString() === year;
  });

  const yearChangeHandler = (newYear) => {
    setYear(newYear);
  };

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter selected={year} onYearChange={yearChangeHandler} />
        <ExpensesChart expenses={filteredExpenses} />
        <ExpensesList expenses={filteredExpenses} onRemove={onRemove} />
      </Card>
    </div>
  );
};
export default Expenses;
