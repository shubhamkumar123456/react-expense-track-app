import React from 'react'
import './ExpensesList.css'
import ExpenseItem from './ExpenseItem'


const ExpensesList = (props) => {

    if(props.items.length===0){
        return <h2 style={{color:"white"}} className='expenses-list__fallback'>Found no expenses</h2>
    }
   

  return (
    <div>
     

        { props.items.map((element)=>{
        return<ExpenseItem key={Math.random()} title={element.title} amount={element.amount} date={element.date}/>
      })}
         {props.items.length===1 && <h2 style={{color:"white"}} className='expenses-list__fallback'>Only single Expense here. Please add more...</h2>}
    </div>
  )
}

export default ExpensesList
