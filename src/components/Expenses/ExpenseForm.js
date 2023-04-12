
import { useState } from 'react';
import './ExpenseForm.css'
const ExpenseForm = () => {

const [enteredtitle, setenteredTitle] = useState("");
const [enteredamount, setenteredAmount] = useState("");
const [entereddate, setenteredDate] = useState("");
  
    const handleTitleChange=(e)=>{
        setenteredTitle(e.target.value)
        console.log(e.target.value);
    }
    const handleDateChange=(e)=>{
        setenteredDate(e.target.value)
        console.log(e.target.value);
    }
    const handleAmountChange=(e)=>{
        setenteredAmount(e.target.value)
        console.log(e.target.value);
    }
  return (
    <div className='expense-form'>
      <form className='expense-form-form' action="">
        <label htmlFor="title">Title</label>
        <input type="text"  placeholder="enter the title" onChange={handleTitleChange} name='enteredtitle'/>
        <label htmlFor="date">Date</label>
        <input type="date"  placeholder="enter date" onChange={handleDateChange} name='entereddate'/>
        <label htmlFor="amount">Amount</label>
        <input type="text"  placeholder="enter the amount" onChange={handleAmountChange}/>
        <button  className='expenseform-addBtn' name='enteredamount'>Add</button>
      </form>
    
    </div>
  )
}

export default ExpenseForm
