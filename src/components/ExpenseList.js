import React from "react"
import { connect } from "react-redux"
import ExpenseListItem from "../components/ExpenseListItem"
import getVisibleExpenses from "../selectors/expenses"


export const ExpenseList = ({ expenses }) => (
    <div className="container">
        <div className="list-header">
            <div className="show-to-desktop">Expense</div>
            <div className="show-to-desktop">Amount</div>
            <div className="show-to-mobile">Expenses</div>
        </div>
        <div className="list-body">
            {expenses.length === 0 &&
                <div className="list-item list-item--message">
                    <p>No expenses</p>
                </div>
            }
            {expenses.map((expense) => <ExpenseListItem key={expense.id} {...expense} />)}
        </div>
    </div>
)

const MapStateToProps = (state) => ({
    expenses: getVisibleExpenses(state.expenses, state.filters),
}
)

export default connect(MapStateToProps)(ExpenseList)