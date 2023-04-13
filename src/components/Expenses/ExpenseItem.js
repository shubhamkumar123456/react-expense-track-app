import React, {useState} from 'react'
import './ExpenseItem.css'
import ExpenseDate from './ExpenseDate'
import Card from '../UI/Card'

const ExpenseItem = (props) => {
  const [ title, setTitle] = useState(props.title);
  const [expense, setExpense] = useState(props.amount);
console.log(props.date)
 
  const clickHandler=()=>{
   setTitle('Updated')
   console.log(title)
  }
  const ExpenseHandler=()=>{
    setExpense("$100")
  }

  return (
    <Card className='expense-item'>
    
    <ExpenseDate date={props.date}/>
      
   
    <div className='expense-item__description'>
   
      <h2>{title}</h2>
      
      <div className='expense-item__location'>{props.location}</div>
      <div className='expense-item__price'>{expense}</div>
    </div>
    <button onClick={clickHandler}>Change Title</button>
    <button onClick={ExpenseHandler}>Change Expense</button>
    </Card>
  )
}

export default ExpenseItem
