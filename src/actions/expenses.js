import database from "../firebase/firebase"

export const addExpense = (expense) => ({
    type: "ADD_EXPENSE",
    expense: {
        ...expense
    }
})

export const startAddExpense = (expenseData = {}) => {
    return (dispatch) => {
        const {
            description = '',
            amount = 0,
            note = '',
            createdAt = 0
        } = expenseData

        const expense = { description, amount, note, createdAt }

        return database.ref('expenses')
            .push(expense)
            .then((ref) => {
                dispatch(addExpense({
                    id: ref.key,
                    ...expense
                }))
            })
    }

}

export const removeExpense = ({ id }) => ({
    type: "REMOVE_EXPENSE",
    id
})

export const editExpense = (id, changes) => ({
    type: "EDIT_EXPENSE",
    id,
    changes
})

export const setExpenses = (expenses) => ({
    type: "SET_EXPENSES",
    expenses
})

export const startSetExpenses = () => {
    return (dispatch) => {
        return database.ref('expenses').once('value').then((snapshot) => {
            const expenses = []
            snapshot.forEach((expense) => {
                expenses.push({
                    id: expense.key,
                    ...expense.val()
                })
            })
            dispatch(setExpenses(expenses))
        })
    }
}

