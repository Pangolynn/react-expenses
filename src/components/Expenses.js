import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";

function Expenses(props) {
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
  return <div className="expenses">{expenseItemsList}</div>;
}
export default Expenses;
