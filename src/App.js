import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const App = () => {
  const expenses = [
    {
      id: "e1",
      title: "Car Insurance",
      amount: 296.78,
      date: new Date(2023, 2, 23),
    },
    { id: "e2", title: "Dentist", amount: 400.0, date: new Date(2023, 1, 22) },
    {
      id: "e3",
      title: "Health Insurance",
      amount: 600.99,
      date: new Date(2023, 0, 1),
    },
    {
      id: "e4",
      title: "Groceries",
      amount: 396.98,
      date: new Date(2023, 4, 15),
    },
  ];

  const addExpenseHandler = (expense) => {
    console.log(expense);
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses expenses={expenses} />
    </div>
  );
};

export default App;
