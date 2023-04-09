import React from 'react'
import './ExpenseItem.css'

const ExpenseItem = (props) => {
  const expenseDate=new Date(2023,4,10);
  const expenseTitle='Car Insurance'
  const expenseAmount=294.67
  const expenseLocation='on road'
  return (
    <div className='expense-item'>
      <div>{props.date.toISOString()}</div>
    <div className='expense-item__description'>
      <h2>{props.title}</h2>
      <div className='expense-item__location'>{props.location}</div>
      <div className='expense-item__price'>{props.amount}</div>
      
    </div>
    </div>
  )
}

export default ExpenseItem
