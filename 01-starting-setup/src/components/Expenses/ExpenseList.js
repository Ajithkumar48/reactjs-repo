import React from "react";
import "./ExpenseList.css";
import ExpenseItem from "./ExpenseItem";

const ExpenseList = (props) => {
  if (props.items.length === 0) {
    return <h2 className="expenses-list__fallback">No Records found</h2>;
  }

  return (
    <ul className="expenses-list">
      {props.items.map((filterdExpense) => (
        <ExpenseItem
          key={filterdExpense.id}
          title={filterdExpense.title}
          amount={filterdExpense.amount}
          date={filterdExpense.date}
        />
      ))}
    </ul>
  );
};

export default ExpenseList;
