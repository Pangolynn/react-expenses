import ExpenseItem from "./ExpenseItem";
import "./ExpensesList.css";

const ExpensesList = ({ expenses, onRemove }) => {
  if (expenses.length === 0) {
    return <h2 className="expenses-list__fallback">Found no expenses.</h2>;
  }

  return (
    <ul className="expenses-list">
      {expenses.map((expense) => (
        <ExpenseItem key={expense.id} expense={expense} onRemove={onRemove} />
      ))}
    </ul>
  );
};

export default ExpensesList;
