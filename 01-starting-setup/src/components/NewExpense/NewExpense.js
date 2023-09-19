import React, { useState } from "react";

import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  const addExpensedFormHandler = (expense) => {
    props.onNewExpense(expense);
    resetHandler();
  };

  const [isAddNewExpense, setIsAddNewExpense] = useState(false);

  const onAddNewExpenseHandler = () => {
    setIsAddNewExpense(true);
  };

  const resetHandler = () => {
    setIsAddNewExpense(false);
  };

  return (
    <div className="new-expense">
      {!isAddNewExpense && (
        <button onClick={onAddNewExpenseHandler}>Add New Expense</button>
      )}
      {isAddNewExpense && (
        <ExpenseForm onExpenseForm={addExpensedFormHandler} onCancel={resetHandler}/>
      )}
    </div>
  );
};

export default NewExpense;
