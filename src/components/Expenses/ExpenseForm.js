
import { useState } from 'react';
import './ExpenseForm.css'
const ExpenseForm = () => {

    const [field, setfield] = useState({ title: "", amount: "", date: "" });
    const handleClick=(e)=>{
        e.preventDefault();
        console.log(field)
    }
    const handleChange=(e)=>{
        setfield({[e.target.name]: e.target.value })
        console.log(field)
    }
  return (
    <div className='expense-form'>
      <form className='expense-form-form' action="">
        <label htmlFor="title">Title</label>
        <input type="text"  placeholder="enter the title" onChange={handleChange} name='title'/>
        <label htmlFor="date">Date</label>
        <input type="date"  placeholder="enter date" onChange={handleChange} name='data'/>
        <label htmlFor="amount">Amount</label>
        <input type="text"  placeholder="enter the amount" onChange={handleChange}/>
        <button onClick={handleClick} className='expenseform-addBtn' name='amount'>Add</button>
      </form>
    
    </div>
  )
}

export default ExpenseForm
