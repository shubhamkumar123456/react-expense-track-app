
import { useState } from 'react';
import './App.css';
import ExpenseForm from './components/Expenses/ExpenseForm';
import ExpenseItem from './components/Expenses/ExpenseItem';

function App() {
  // const [expenses, setexpenses] = useState([ {id:'e1',title:'Car Insurance',amount:294.67,date:new Date(2023,4,10),location:"delhi"},
  //   {id:'e2',title:'Movie',amount:180,date:new Date(2023,4,8),location:"lucknow"},
  //   {id:'e3',title:'Shopping',amount:1000,date:new Date(2023,4,5),location:"kanpur"},
  //   {id:'e4',title:'Apple',amount:500,date:new Date(2023,4,1),location:"bihar"}]);
  const expenses=[
    {id:'e1',title:'Car Insurance',amount:294.67,date:new Date(2023,4,10),location:"delhi"},
    {id:'e2',title:'Movie',amount:180,date:new Date(2023,4,8),location:"lucknow"},
    {id:'e3',title:'Shopping',amount:1000,date:new Date(2023,4,5),location:"kanpur"},
    {id:'e4',title:'Apple',amount:500,date:new Date(2023,4,1),location:"bihar"},
   
  ]

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const inputFields={
      ...enteredExpenseData,
      id:Math.random().toString
    }
    // console.log(inputFields)
    // expenses.push(inputFields)
    // console.log(expenses)
   }

   const addExpenseHandler=(expense)=>{
    console.log("in app.js")
    // console.log(expense)
    // setexpenses(expenses.push(expense))
    expenses.push(expense)
    // expenses.push(expense)
    console.log(expenses)
   }


  return (
    <div className="App">
      <h2>Let's get started!</h2>
      <div className='app-expense-form'><ExpenseForm onSaveExpenseData={saveExpenseDataHandler} addExpense={addExpenseHandler}/></div>
      <div className='App-expenses'>
      {expenses.map((element)=>{
        return<ExpenseItem key={Math.random()} title={element.title} amount={element.amount} date={element.date}/>
      })}
      </div>
    
 
      
    </div>
  );
}

export default App;
