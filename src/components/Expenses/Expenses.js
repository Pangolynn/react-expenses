import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import "./Expenses.css";

const Expenses = (props) => {
  const expenseItemsList = [];

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
  return <Card className="expenses">{expenseItemsList}</Card>;
};
export default Expenses;
