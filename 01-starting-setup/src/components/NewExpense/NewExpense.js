import React from "react";

import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {

  const addExpensedFormHandler = (expense) => {
    props.onNewExpense(expense);
  }

  return (
    <div className="new-expense">
      <ExpenseForm onExpenseForm={addExpensedFormHandler} />
    </div>
  );
};

export default NewExpense;
