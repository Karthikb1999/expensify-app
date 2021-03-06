import React from "react"
import ExpenseForm from "../components/ExpenseForm"
import { connect } from "react-redux"
import { startEditExpense, startRemoveExpense } from "../actions/expenses"


export class EditExpensePage extends React.Component {
    onSubmit = (changes) => {
        this.props.startEditExpense(this.props.expense.id, changes)
        this.props.history.push("/")
    }
    onClick = () => {
        this.props.startRemoveExpense(this.props.expense.id)
        this.props.history.push("/")
    }

    render() {
        return (
            <div>
                <div className="page-header">
                    <div className="container">
                        <h1 className="page-header__title">
                            Edit Expense
                    </h1>
                    </div>
                </div>
                <div className="container">
                    <ExpenseForm expense={this.props.expense}
                        onSubmit={this.onSubmit}
                    />
                    <button onClick={this.onClick} className="button--secondary">Remove Expense</button>
                </div>
            </div>
        )
    }

}


const mapStateToProps = (state, props) => ({
    expense: state.expenses.find((expense) => expense.id === props.match.params.id)
})

const mapDispatchtoProps = (dispatch) => ({
    startEditExpense: (id, changes) => {
        dispatch(startEditExpense(id, changes))
    },
    startRemoveExpense: (id) => {
        dispatch(startRemoveExpense(id))
    }
})


export default connect(mapStateToProps, mapDispatchtoProps)(EditExpensePage)