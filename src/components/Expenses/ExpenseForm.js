
import { useState } from 'react';
import './ExpenseForm.css'
const ExpenseForm = () => {

const [userInput, setUserInput] = useState({
    enteredTitle:"",
    enteredAmount:"",
    enteredDate:""
});
const handleSubmit=(e)=>{
    e.preventDefault()
        console.log(userInput)
}
  
    const handleTitleChange=(e)=>{
        setUserInput({...userInput,enteredTitle:e.target.value});
        // console.log(e.target.value);
    }
    const handleDateChange=(e)=>{
        setUserInput({...userInput,enteredDate:e.target.value});
        // console.log(e.target.value);
    }
    const handleAmountChange=(e)=>{
        setUserInput({...userInput,enteredAmount:e.target.value});
        // console.log(e.target.value);
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
        <button  className='expenseform-addBtn' onClick={handleSubmit} name='enteredamount'>Submit</button>
      </form>
    
    </div>
  )
}

export default ExpenseForm
