import React from "react"
import ExpenseList from "../components/ExpenseList"
import ExpenseListFilters from "../components/ExpenseListFilters";
import ExpenseSummary from "../components/ExpenseSummary";




export const ExpenseDashBoardPage = () => (
    <div>
        <ExpenseSummary />
        <ExpenseListFilters />
        <ExpenseList />
    </div>
)






export default ExpenseDashBoardPage