import React, { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const App = () => {
  const [expenses, setExpenses] = useState(() => {
    const expenseItems = localStorage.getItem("expenses");
    const parseData = JSON.parse(expenseItems) ?? [];
    parseData.map((item) => {
      return (item.date = new Date(item.date));
    });
    return parseData;
  });

  const addExpenseHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };

    const updatedExpense = [expenseData, ...expenses];
    setExpenses(updatedExpense);
    localStorage.setItem("expenses", JSON.stringify(updatedExpense));
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
