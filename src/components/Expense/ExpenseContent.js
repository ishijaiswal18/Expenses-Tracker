import React from 'react';
import EssentialItem from './ExpenseItems';
import "./ExpenseContent.css"

function ExpenseContent(props){
    if(props.filteredItems.length === 0){
        return <h1 className = "expenses-list__fallback">No Expense Found</h1>
    }
    return (
      props.filteredItems.map((items) => 
        <EssentialItem className = 'expenses-list'
                  key = {items.id} 
                  title={items.title} 
                  amount={items.amount} 
                  date = {items.date} />
      )   
    );
    
}

export default ExpenseContent;