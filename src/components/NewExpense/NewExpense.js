import React from "react";
import "./NewExpense.css";
import './ExpenseForm'
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {

  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpenseData={props.onAddExpense}  />
    </div>
  );
};

export default NewExpense;
