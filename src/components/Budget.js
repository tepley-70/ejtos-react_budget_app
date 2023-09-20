import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = (props) => {
    const { budget, expenseTotal, Currency } = useContext(AppContext);
    const [newBudget, setNewBudget] = useState(budget);
    const handleBudgetChange = (event) => {
        setNewBudget(event.target.value);

        if(budget<expenseTotal){
            alert("Budget cannot be less than spent"+expenseTotal);
        };
        if(budget>20000){
            alert("Budget cannot exceed 20,000");
        };
        
    }
    return (
<div className='alert alert-secondary'>
<span>Budget: {Currency}{budget}</span>
<input type="number" step="10" value={newBudget} onChange={handleBudgetChange}></input>
</div>
    );
};
export default Budget;