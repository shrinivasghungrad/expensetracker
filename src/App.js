import React, { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
import Registration from "./components/Registration";
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import Login from "./components/Login/Login";

const App = () => {
  const [isUserRegister, setIsUserRegister] = useState(false);
  const [isUserLogin, setIsUserLogin] = useState(false);
  
  const [expenses, setExpenses] = useState(() => {
    const expenseItems = localStorage.getItem("expenses");
    const parseData = JSON.parse(expenseItems) ?? [];
    parseData.map((item) => {
      return (item.date = new Date(item.date));
    });
    return parseData;
  });


  const submitRegistrationForm = (name, email, phone_number, password) => {
    const regFormValues = {
      name : name,
      email : email,
      phone_number : phone_number,
      password : password
    }
    
    const allUsers = JSON.parse(localStorage.getItem('registerUsers')) ?? [];
    
    localStorage.setItem('registerUsers', JSON.stringify([...allUsers, regFormValues]));
    alert("User Register Successfully!");
    setIsUserRegister(true);
    
  }

  const submitLoginForm = (email, password) => {
 
    const allUsers = JSON.parse(localStorage.getItem('registerUsers'));
    allUsers.find((user) => {
       if(user.email === email && user.password ===  password){
            alert("Login Successfully!!!!");
            setIsUserLogin(true);
            return true;
       } else if(user.email === email || user.password ===  password){
            alert("You Enter Wrong Credentials!!");
            
       }else{
            alert("You don't have account please create new account!");
            
       }
    })
  
}

  const addExpenseHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };

    const updatedExpense = [expenseData, ...expenses];
    setExpenses(updatedExpense);
    localStorage.setItem("expenses", JSON.stringify(updatedExpense));
  };
  
  const loginButton = () => {
    setIsUserRegister(true);
  }
  
  //line 35 expense variable recive data from NewExpense which is child and
  // data is collecte in app.js which is parent and for this process send data from child to parent
  return (
    <div>
      {!isUserLogin ? !isUserRegister ? <Registration loginButton={loginButton} register={submitRegistrationForm}/> : <Login login={submitLoginForm}/> 
       : <><NewExpense onAddExpense={addExpenseHandler} /><Expenses item={expenses} /></>}
    </div>
  );
};

export default App;
