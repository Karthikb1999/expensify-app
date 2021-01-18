import React from "react"
import ExpenseForm from "../components/ExpenseForm"
import { connect } from "react-redux"
import { editExpense, removeExpense } from "../actions/expenses"


export class EditExpensePage extends React.Component {
    onSubmit = (changes) => {
        this.props.editExpense(this.props.expense.id, changes)
        this.props.history.push("/")
    }
    onClick = () => {
        this.props.removeExpense(this.props.expense.id)
        this.props.history.push("/")
    }

    render() {
        return (
            <div>
                <ExpenseForm expense={this.props.expense}
                    onSubmit={this.onSubmit}
                />
                <button onClick={this.onClick}>Remove Expense</button>
            </div>
        )
    }

}


const mapStateToProps = (state, props) => ({
    expense: state.expenses.find((expense) => expense.id === props.match.params.id)
})

const mapDispatchtoProps = (dispatch) => ({
    editExpense: (id, changes) => {
        dispatch(editExpense(id, changes))
    },
    removeExpense: (id) => {
        dispatch(removeExpense({ id }))
    }
})


export default connect(mapStateToProps, mapDispatchtoProps)(EditExpensePage)