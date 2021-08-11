import React, {useState} from 'react';

import "./ExpenseForm.css";

function ExpenseForm(props){
    const [entertedTitle, setEntertedTitle] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');
    const [enteredDate, setEnteredDate] = useState('');

    const titleChangeHandler = (event) => {
        setEntertedTitle(event.target.value);
    }
    const amountChangeHandler = (event) => {
        setEnteredAmount(event.target.value);
    }
    const dateChangeHandler = (event) => {
        setEnteredDate(event.target.value);
    }

    const submitHandler = (event) =>{
        event.preventDefault();

        const ExpenseData = {
            title : entertedTitle,
            amount : enteredAmount,
            date : new Date(enteredDate)
        }

        
        props.onAddingExpense(ExpenseData);
        setEntertedTitle('');
        setEnteredAmount('');
        setEnteredDate('');
        props.isEdit(false);
    }
    const cancelHAndler = (event) => {
        props.isEdit(false);
    }
    

    return (
        <form onSubmit={submitHandler} >
            <div className = "new-expense__controls">
                <div className = "new-expense__control">
                    <label>
                        <input placeholder = "Title" type = "text" value = {entertedTitle} onChange = {titleChangeHandler}/> 
                    </label>
                </div>
                <div className = "new-expense__control">
                    <label>
                        <input placeholder = "Amount" type = "number" min = "0.01" step = "0.01" value = {enteredAmount} onChange = {amountChangeHandler}/> 
                    </label>
                </div>
                <div className = "new-expense__control">
                    <label>
                        <input type = "date" min = "2019-01-01" max = "2021" value = {enteredDate} onChange = {dateChangeHandler}/> 
                    </label>
                </div>
            </div>

            <div className="new-expense__actions">
                <button type ="button" onClick = {cancelHAndler}>Cancel</button>
                <button type = "submit">Add Expense</button>
            </div>
        </form>
    );
}


export default ExpenseForm;

