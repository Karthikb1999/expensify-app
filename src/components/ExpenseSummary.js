import React from "react"
import numeral from "numeral"
import selectExpensesTotal from "../selectors/expenses-total"
import getVisibleExpenses from "../selectors/expenses"
import { connect } from "react-redux"

export const ExpenseSummary = ({ expensesCount, expensesTotal }) => {
    return (
        <div>
            <h1>
                Viewing {expensesCount} expense{expensesCount !== 1 ? 's' : ''} totalling {numeral(expensesTotal / 100).format('$0, 0.00')}
            </h1>
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