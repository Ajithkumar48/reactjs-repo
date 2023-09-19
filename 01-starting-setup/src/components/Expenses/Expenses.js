import "./Expenses.css";
import Card from "../UI/Card";
import ExpenseFilter from "./ExpenseFilter";
import { useState } from "react";
import ExpenseList from "./ExpenseList";

function Expenses(props) {
  const [selectedYear, setSelectedYear] = useState("2020");

  const addExpenseFilterHandler = (year) => {
    setSelectedYear(year);
  };

  const filteredExpense = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === selectedYear;
  });

  

  return (
    <li>
      <Card className="expenses">
        <ExpenseFilter
          onExpenseFilter={addExpenseFilterHandler}
          selected={selectedYear}
        />
        <ExpenseList items={filteredExpense}/>
      </Card>
    </li>
  );
}

export default Expenses;
