import React from "react"
import numeral from "numeral"

export const ExpenseSummary = (props) => {
    return (
        <p>Viewing {props.expensesCount} expense{props.expensesCount !== 1 ? 's' : ''} totalling {numeral(props.expensesTotal / 100).format('$0, 0.00')}</p>
    )
}

export default ExpenseSummary