
import { useState } from 'react';
import './App.css';
import ExpenseForm from './components/Expenses/ExpenseForm';
import ExpenseItem from './components/Expenses/ExpenseItem';
import ExpenseFilter from './components/Expenses/ExpenseFilter';
import ExpensesList from './components/Expenses/ExpensesList';

function App() {
  const [filteredYear, setfilteredYear] = useState('2020');
  const expenses=[
    {id:'e1',title:'Car Insurance',amount:294.67,date:new Date(2020,4,10),location:"delhi"},
    {id:'e2',title:'Movie',amount:180,date:new Date(2023,4,8),location:"lucknow"},
    {id:'e3',title:'Shopping',amount:1000,date:new Date(2023,4,5),location:"kanpur"},
    {id:'e4',title:'Apple',amount:500,date:new Date(2023,4,1),location:"bihar"},
   
  ]
  const [expenses1, setexpenses1] = useState(expenses);

  const filteredExpenses=expenses1.filter(expense=>{
    return expense.date.getFullYear().toString()===filteredYear
  })

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const inputFields={
      ...enteredExpenseData,
      id:Math.random().toString
    }
     }

   const addExpenseHandler=(expense)=>{
    setexpenses1([expense,...expenses1])
   }

  const filterChangesHandler=(selectedYear)=>{

    setfilteredYear(selectedYear)
    
  };
  console.log(filteredYear)
  return (
    <div className="App">
      <h2>Let's get started!</h2>
    
      <div className='app-expense-form'>
        <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} addExpense={addExpenseHandler}/>
       
      
      </div>
      <div className='App-expenses'>
      <ExpenseFilter selected={filteredYear} onChangeFilter={filterChangesHandler}/>
        <ExpensesList items={filteredExpenses}/>
    {/* {filteredExpenses.length ===0 && <p style={{color:"white"}}>No expenses found.</p>}
      {filteredExpenses.length > 0 &&  filteredExpenses.map((element)=>{
        return<ExpenseItem key={Math.random()} title={element.title} amount={element.amount} date={element.date}/>
      })} */}

      </div>
    
 
      
    </div>
  );
}

export default App;
