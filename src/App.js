import ExpenseItem from "./components/ExpenseItem";

function createExpense(expenseTerm) {

  return (
    <ExpenseItem 
      key={expenseTerm.id}
      title={expenseTerm.title}
      price={expenseTerm.amount}
      date={expenseTerm.date}
    />
  );
}

function App() {

  const expenses = [
    {
      id: 'e1',
      title: 'Toilet Paper',
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    { 
      id: 'e2', 
      title: 'New TV', 
      amount: 799.49, 
      date: new Date(2021, 2, 12) 
    },
    {
      id: 'e3',
      title: 'Car Insurance',
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: 'e4',
      title: 'New Desk (Wooden)',
      amount: 450,
      date: new Date(2021, 5, 12),
    },
  ];

  return (
    <div>
      <h2>Let's get started!</h2>
      <p>This is also visible!</p>
      {/* <ExpenseItem
        id="e1"
        date={expenses[0].date} 
        title={expenses[0].title}
        price={expenses[0].amount}
      />
      <ExpenseItem 
        id="e2"
        date={expenses[1].date} 
        title={expenses[1].title}
        price={expenses[1].amount}
      />
      <ExpenseItem 
        id="e3" 
        date={expenses[2].date} 
        title={expenses[2].title}
        price={expenses[2].amount}
      />
      <ExpenseItem 
        id="e4" 
        date={expenses[3].date} 
        title={expenses[3].title}
        price={expenses[3].amount}
      /> */}
      {expenses.map(createExpense)}
    </div>
  );
}

export default App;
