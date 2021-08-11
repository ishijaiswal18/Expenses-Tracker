import "./ExpenseItems.css";
import DateList from "./ExpenseDate"
import Card from "../UI/Card";
function EssentialItem(props){
    return (
        <Card className ="expense-item"> 
            <DateList date = {props.date}/>
            <div className ="expense-item__description">
                <h2 >{props.title}</h2>
                <div className ="expense-item__price">${props.amount}</div>
            </div>
        </Card>
    );
}

export default EssentialItem;