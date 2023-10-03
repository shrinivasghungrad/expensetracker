import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";
import React from "react";

const ExpenseItem = (props) => {
  
  return (
    <div className="expense-item">
        <ExpenseDate date={props.date} />
       <div className="expense-item_description">
        <h2>{props.title}</h2>
        <div className="expense-item_price">${props.amount}</div>
      </div>
    </div>
  );
};

export default ExpenseItem;
//expensedate file is created for to learn multiple component simply date code copy from expenseitems and paste it in expensedate to understand multiple component concept

