import React from "react";
import Expenses from "./components/Expenses/Expenses";


const App = () => {
  //array of object
  let expenses = [
    {
      id: "e1",
      title: "College fee",
      amount: 800,
      date: new Date(2023, 9, 26),
    },
    {
      id: "e2",
      title: "Food",
      amount: 250,
      date: new Date(2023, 10, 26),
    },
    {
      id: "e3",
      title: "Travel",
      amount: 250,
      date: new Date(2023, 10, 26),
    },
    {
      id: "e1",
      title: "Books",
      amount: 100,
      date: new Date(2023, 12, 27),
    },
  ];

  return (
    <div>
      <h2> lets get started</h2>
      <Expenses item={expenses} />
    </div>
  );
};

export default App;
