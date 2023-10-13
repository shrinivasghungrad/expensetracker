import React, { useState } from 'react';
import './ExpenseForm.css'; 

const ExpenseForm = (props) => {

const [enteredTitle,setEnteredTitle]= useState('');
const [enteredAmount,setEnteredAmount]= useState('');
const [enteredDate,setEnteredDate]= useState('');


  const titleChangeHandler=(event)=>{
    setEnteredTitle(event.target.value);
  };

  const amountChangeHandler=(event)=>{
    setEnteredAmount(event.target.value);
  };
  

  const dateChangeHandler=(event)=>{
    setEnteredDate(event.target.value);
  };
  const submitHandler = (event) =>{
        event.preventDefault(); //at the time of submit the form page will not refresh

        const expenseData={
          title:enteredTitle,
          amount:enteredAmount,
          date: new Date(enteredDate ) //enterDate is in string format so use Date for convert into date object
        }
        props.onSaveExpenseData(expenseData);
        
        console.log(expenseData);
        setEnteredTitle('');
        setEnteredAmount('');
        setEnteredDate('');  //these tree line are used to to blank the file after enter data and submit 
                             //means data is collected and after submit filed is clear this process is called two-way binding
  };
  
  return (
    <form onSubmit={submitHandler}>
      <div className='new-expense__controls'>
        <div className='new-expense__control'>
          <label>title</label>
          <input type='text' value={enteredTitle} onChange={titleChangeHandler}></input>

        </div>
        <div className='new-expense__control'>
          <label>Amount</label>
          <input type='number' value={enteredAmount} min="0.01" step="0.01" onChange={ amountChangeHandler} ></input>

        </div> 
        <div className='new-expense__control'>
          <label>Date</label>
          <input type='date' value={enteredDate} onChange={dateChangeHandler} ></input>

        </div>
      </div>
      <div className='new-expense__action'>
        <button type='submit' > Add Expense</button>
      </div>
    </form>
  );
}

export default ExpenseForm;