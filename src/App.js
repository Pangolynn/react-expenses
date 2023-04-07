import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
import { useState } from "react";

const INITIAL_EXPENSES = [
  {
    id: "e1",
    title: "Car Insurance",
    amount: 296.78,
    date: new Date(2022, 2, 23),
  },
  { id: "e2", title: "Dentist", amount: 400.0, date: new Date(2023, 1, 22) },
  {
    id: "e3",
    title: "Health Insurance",
    amount: 600.99,
    date: new Date(2021, 0, 1),
  },
  {
    id: "e4",
    title: "Groceries",
    amount: 396.98,
    date: new Date(2020, 4, 15),
  },
];

const App = () => {
  const [expenses, setExpenses] = useState(INITIAL_EXPENSES);

  const addExpenseHandler = (expense) => {
    console.log(expense);
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  const removeExpenseHandler = (id) => {
    console.log("app removeExpenseHandler called");
    const newExpenses = expenses.filter((item) => item.id !== id);
    console.log(id, "", expenses);
    console.log({ newExpenses });
    setExpenses(newExpenses);
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses expenses={expenses} onRemove={removeExpenseHandler} />
    </div>
  );
};

export default App;
