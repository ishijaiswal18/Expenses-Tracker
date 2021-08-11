import React ,{useState} from 'react'
import Expenses from "./components/Expense/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
import ExpenseList from "./components/Expense/ExpenseList";

function App() {
  const [finalExpense, setFinalExpense] = useState(ExpenseList);
  const AddedExpense = expenseData =>{
    setFinalExpense(prevExpense => {
      return [expenseData , ...prevExpense];
    });
  };


  return (
    <div>
      <NewExpense onAddingExpense = {AddedExpense}/>
      <Expenses updatedExpense = {finalExpense} />
    </div>
  );
}

export default App;
