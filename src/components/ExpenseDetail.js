
import './ExpenseDetail.css'
const ExpenseDetail = (props) => {
  return (
    <div className='expense-details'>
      <div className='expense-item__location'>{props.location}</div>
      <div className='expense-item__price'>{props.amount}</div>
    </div>
  )
}

export default ExpenseDetail
