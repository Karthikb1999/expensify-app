import React from "react"
import { connect } from "react-redux"
import ExpenseListItem from "../components/ExpenseListItem"
import getVisibleExpenses from "../selectors/expenses"


export const ExpenseList = ({ expenses }) => (
    <div>
        {expenses.length === 0 && <p>No expenses</p>}
        {expenses.map((expense) => <ExpenseListItem key={expense.id} {...expense} />)}
    </div>
)

const MapStateToProps = (state) => ({
    expenses: getVisibleExpenses(state.expenses, state.filters),
}
)

export default connect(MapStateToProps)(ExpenseList)