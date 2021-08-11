import "./ExpenseDate.css";
import Card from "../UI/Card";
function DateList(props){
    return(
        <Card className = "expense-date">
            <div className = "expense-date__month"> {props.date.toLocaleString("en-US", {month: "long"})} </div>
            <div className = "expense-date__day"> {props.date.toLocaleString("en-US", {day: "2-digit"})} </div>
            <div className = "expense-date__year"> {props.date.getFullYear()} </div> 
        </Card>
    );
}

export default DateList;