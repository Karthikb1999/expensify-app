import React from "react"
import numeral from "numeral"
import selectExpensesTotal from "../selectors/expenses-total"
import getVisibleExpenses from "../selectors/expenses"
import { connect } from "react-redux"
import { Link } from "react-router-dom"

export const ExpenseSummary = ({ expensesCount, expensesTotal }) => {
    return (
        <div className="page-header">
            <div className="container">
                <h1 className="page-header__title">
                    Viewing <span>{expensesCount}</span> expense{expensesCount !== 1 ? 's' : ''} totalling <span>{numeral(expensesTotal / 100).format('$0, 0.00')}</span>
                </h1>
                <div className="page-header__actions">
                    <Link to="/create" className="button">Add Expense</Link>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {

    const visibleExpenses = getVisibleExpenses(state.expenses, state.filters)
    return ({
        expensesCount: visibleExpenses.length,
        expensesTotal: selectExpensesTotal(visibleExpenses)
    })

}

export default connect(mapStateToProps)(ExpenseSummary)