import React, { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";


let Dummy_Expense = [
  
];

const App = () => {
  const [expenses,setExpenses]= useState(Dummy_Expense);
  //array of object
  fetch('http:localhost/sample-api/api/read.php').then(
    response=>{
      return response.json();

    }
    
  ).then(
    data=>{
      console.log(data);
      setExpenses(data)
    }
  );
  
  const addExpenseHandler = (expense) => {
    const updatedExpense = [expense,...expenses];
    setExpenses(updatedExpense);
  }; //line 35 expense variable recive data from NewExpense which is child and
    // data is collecte in app.js which is parent and for this process send data from child to parent 
  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses item={expenses} />
    </div>
  );
};

export default App;
