import React, {useState} from 'react'
import"./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

function NewExpense(props){
    const AddedExpense = expense => {
        const expenseData ={
            ...expense,
            id : Math.random().toString()
        }
        props.onAddingExpense(expenseData);
    };

    const [isEditing, setIsEditing] = useState(false);

    const EditingHandler = () => {
        setIsEditing(true);
    }

    return (
        <div className="new-expense">
            {!isEditing && <button type="button" onClick = {EditingHandler}> Add New Expenses</button>}
            {isEditing && <ExpenseForm onAddingExpense = {AddedExpense} isEdit = {setIsEditing}/>}
        </div>
    );
}

export default NewExpense;