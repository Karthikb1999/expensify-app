import React from "react"
import ExpenseList from "../components/ExpenseList"
import ExpenseListFilters from "../components/ExpenseListFilters";
import ExpenseSummary from "../components/ExpenseSummary";
import { connect } from "react-redux"
import selectExpensesTotal from "../selectors/expenses-total"
import getVisibleExpenses from "../selectors/expenses"



export const ExpenseDashBoardPage = ({ expenses }) => (
    <div>
        <ExpenseSummary
            expensesCount={expenses.length}
            expensesTotal={selectExpensesTotal(expenses)}
        />
        <ExpenseListFilters />
        <ExpenseList />
    </div>
)


const mapStateToProps = (state) => ({
    expenses: getVisibleExpenses(state.expenses, state.filters)
})



export default connect(mapStateToProps)(ExpenseDashBoardPage)