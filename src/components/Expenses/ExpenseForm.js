
import { useState } from 'react';
import './ExpenseForm.css'
const ExpenseForm = (props) => {

const [enteredTitle, setEnteredTitle] = useState("")
const [enteredDate, setEnteredDate] = useState("")
const [enteredAmount, setEnteredAmount] = useState("")

const handleSubmit=(e)=>{
    e.preventDefault()
   
        let inputFields={
          title:enteredTitle,
          amount:enteredAmount,
          date:enteredDate
        }
        // console.log(inputFields)
        props.onSaveExpenseData(inputFields);
        props.addExpense(inputFields);
        setEnteredTitle("");
        setEnteredDate("");
        setEnteredAmount("")
}
  
    const handleTitleChange=(e)=>{
      setEnteredTitle(e.target.value);
        // console.log(e.target.value);
    }
    const handleDateChange=(e)=>{
      setEnteredDate(e.target.value);
        // console.log(e.target.value);
    }
    const handleAmountChange=(e)=>{
      setEnteredAmount(e.target.value);
        // console.log(e.target.value);
    }
  return (
    <div className='expense-form'>
      <form className='expense-form-form' action="">
        <label htmlFor="title">Title</label>
        <input type="text"  placeholder="enter the title" value={enteredTitle} onChange={handleTitleChange} name='enteredtitle'/>
        <label htmlFor="date">Date</label>
        <input type="date"  placeholder="enter date" value={enteredDate} onChange={handleDateChange} name='entereddate'/>
        <label htmlFor="amount">Amount</label>
        <input type="text"  placeholder="enter the amount" value={enteredAmount} onChange={handleAmountChange}/>
        <button  className='expenseform-addBtn' onClick={handleSubmit} name='enteredamount'>Submit</button>
      </form>
    
    </div>
  )
}

export default ExpenseForm
