
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
          date:new Date(enteredDate) 
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

    const [isActive, setActive] = useState("false");
    const [isForm, setisForm] = useState("true");
    const [isCancel, setisCancel] = useState("true");
    const ToggleClass = (e) => {
      e.preventDefault();
        setActive(!isActive); 
     
      
      setisForm(!isForm);
      setisCancel(false)
     };

     const cancelHandle=(e)=>{
      e.preventDefault();
      if(isCancel===true){
        setisCancel(false)
        setisCancel(false)
        setisForm(false)
        
      }
      else{
        setisCancel(true)
      
        setActive(true)
        setisForm(true)
      }
     }
     console.log(isCancel)
  return (
    <div className='expense-form'>

      <button onClick={ToggleClass} className={isActive ? "activebtn" : "nullbtn"}>Add New Expenses</button>
    <div className={isForm ? "activeform" : "nullform"}>
    <form  className='expense-form-form' action="">
        <label htmlFor="title">Title</label>
        <input type="text"  placeholder="enter the title" value={enteredTitle} onChange={handleTitleChange} name='enteredtitle'/>
        <label htmlFor="date">Date</label>
        <input type="date"  placeholder="enter date" value={enteredDate} onChange={handleDateChange} name='entereddate'/>
        <label htmlFor="amount">Amount</label>
        <input type="text"  placeholder="enter the amount" value={enteredAmount} onChange={handleAmountChange}/>
        <button  className='expenseform-addBtn' onClick={handleSubmit} name='enteredamount'>Submit</button>
        <button onClick={cancelHandle} className={isCancel ? "activeCancel" : "nullCancel"}>Cancel</button>
      </form>
    </div>
    
    </div>
  )
}

export default ExpenseForm
