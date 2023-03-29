import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpensesFilter";
import Card from "../UI/Card";
import "./Expenses.css";
import { useState } from "react";

const Expenses = (props) => {
  const expenseItemsList = [];
  const [year, setYear] = useState("2022");

  const yearChangeHandler = (newYear) => {
    setYear(newYear);
  };

  props.expenses.forEach((expense) => {
    expenseItemsList.push(
      <ExpenseItem
        key={expense.id}
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
      />
    );
  });
  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter selected={year} onYearChange={yearChangeHandler} />
        {expenseItemsList}
      </Card>
    </div>
  );
};
export default Expenses;
