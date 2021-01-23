import React from "react"
import ExpenseForm from "../components/ExpenseForm"
import { startAddExpense } from "../actions/expenses"
import { connect } from "react-redux"


export class AddExpensePage extends React.Component {
    onSubmit = (expense) => {
        this.props.startAddExpense(expense)
        this.props.history.push("/")
    }
    render() {
        return (
            <div>
                <h2>Add Expense</h2>
                <ExpenseForm
                    onSubmit={this.onSubmit}
                />
            </div>
        )
    }
}


const matchDispatchToProps = (dispatch) => ({
    startAddExpense: (expense) => { dispatch(startAddExpense(expense)) }
})

export default connect(undefined, matchDispatchToProps)(AddExpensePage)