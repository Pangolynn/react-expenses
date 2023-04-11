import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import "./ExpenseItem.css";
import Button from "../UI/Button";

const ExpenseItem = ({ expense, onRemove }) => {
  return (
    <li>
      <Card className="expense-item">
        <ExpenseDate date={expense.date} />
        <div className="expense-item__description">
          <h2>{expense.title}</h2>
          <div className="expense-item__price">${expense.amount}</div>
        </div>
        {/* Button not passing onClick properly */}
        <Button onClick={() => onRemove(expense.id)} alt type="button">
          Delete Expense
        </Button>
        {/* TODO: EDIT & VIEW EXPENSE */}
      </Card>
    </li>
  );
};

export default ExpenseItem;
