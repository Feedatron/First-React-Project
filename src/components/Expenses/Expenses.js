import React, {useState} from 'react'
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import './Expenses.css'
import ExpensesFilter from "./ExpensesFilter";

const Expenses = (props) => {
    const [filterYear, setFilterYear] = useState('2022')
    const filterChangeHandler = selectedYear => {
        setFilterYear(selectedYear);
    }

    return (
            <Card className="expenses">
                <ExpensesFilter selected={filterYear} onChangeFilter={filterChangeHandler}/>
                <ExpenseItem
                    id="e1"
                    date={props.items[0].date} 
                    title={props.items[0].title}
                    price={props.items[0].amount}
                />
                <ExpenseItem 
                    id="e2"
                    date={props.items[1].date} 
                    title={props.items[1].title}
                    price={props.items[1].amount}
                />
                <ExpenseItem 
                    id="e3" 
                    date={props.items[2].date} 
                    title={props.items[2].title}
                    price={props.items[2].amount}
                />
                <ExpenseItem 
                    id="e4" 
                    date={props.items[3].date} 
                    title={props.items[3].title}
                    price={props.items[3].amount}
                />
            </Card>       
    );
}

export default Expenses