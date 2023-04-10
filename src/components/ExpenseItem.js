import React from 'react'
import './ExpenseItem.css'
import ExpenseDate from './ExpenseDate'
import ExpenseDetail from './ExpenseDetail'
const ExpenseItem = (props) => {
  
  return (
    <div className='expense-item'>
    
   <div><ExpenseDate date={props.date}/></div>
      
   
    <div className='expense-item__description'>
    <div >  <ExpenseDetail amount={props.amount} location={props.location}/></div>
      <h2>{props.title}</h2>
      
      
    </div>
    </div>
  )
}

export default ExpenseItem
