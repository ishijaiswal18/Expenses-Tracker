import React, {useState} from 'react'

import Card from "../UI/Card";
import ExpensesFilter from "./ExpenseFilter";
import ExpenseContent from "./ExpenseContent";
import ExpenseChart from "./ExpenseChart";
import "./Expenses.css";



function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState('2020');
  const filterChangeHandler = selectedYear => {
    setFilteredYear(selectedYear);
  };

  const filteredItems = props.updatedExpense.filter(item => item.date.getFullYear().toString() === filteredYear);



  return (
    <li>
      <Card className="expenses">
        <ExpensesFilter selected = {filteredYear} onChangeFilter ={filterChangeHandler}/>
        <ExpenseChart expenses = {filteredItems}/>
        <ExpenseContent filteredItems = {filteredItems}/> 
      </Card>
    </li>
  );
}

export default Expenses;
