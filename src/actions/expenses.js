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

