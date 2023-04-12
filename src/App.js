
import './App.css';
import ExpenseForm from './components/Expenses/ExpenseForm';
import ExpenseItem from './components/Expenses/ExpenseItem';

function App() {
  const expenses=[
    {id:'e1',title:'Car Insurance',amount:294.67,date:new Date(2023,4,10),location:"delhi"},
    {id:'e2',title:'Movie',amount:180,date:new Date(2023,4,8),location:"lucknow"},
    {id:'e3',title:'Shopping',amount:1000,date:new Date(2023,4,5),location:"kanpur"},
    {id:'e4',title:'Apple',amount:500,date:new Date(2023,4,1),location:"bihar"},
   
  ]
  return (
    <div className="App">
      <h2>Let's get started!</h2>
      <div className='app-expense-form'><ExpenseForm/></div>
      <div className='App-expenses'>
      {expenses.map((element)=>{
        return<ExpenseItem key={Math.random()} title={element.title} amount={element.amount} date={element.date}/>
      })}
      </div>
    
 
      
    </div>
  );
}

export default App;
