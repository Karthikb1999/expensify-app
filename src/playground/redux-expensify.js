import { createStore, combineReducers } from "redux"
import { v4 as uuid } from "uuid"

const addExpense = ({
    description = '',
    amount = 0,
    note = '',
    createdAt = 0
} = {}) => ({
    type: "ADD_EXPENSE",
    expense: {
        id: uuid(),
        description,
        amount,
        note,
        createdAt
    }
})

const removeExpense = ({ id }) => ({
    type: "REMOVE_EXPENSE",
    id
})

const editExpense = (id, changes) => ({
    type: "EDIT_EXPENSE",
    id,
    changes
})


const setTextFilter = (text = "") => ({
    type: "SET_TEXT_FILTER",
    text
})

const sortByDate = () => ({
    type: "SORT_BY_DATE"
})

const sortByAmount = () => ({
    type: "SORT_BY_AMOUNT"
})

const setStartDate = (startDate) => ({
    type: "SET_START_DATE",
    startDate
})

const setEndDate = (endDate) => ({
    type: "SET_END_DATE",
    endDate
})

const getVisibleExpenses = (expenses, { text, sortBy, startDate, endDate }) => {
    const visibleExpenses = expenses.filter((item) => {
        const textMatch = item.description.toLowerCase().includes(text.toLowerCase())
        const startDateMatch = typeof startDate !== "number" || item.createdAt >= startDate
        const endDateMatch = typeof endDate !== "number" || item.createdAt <= endDate

        return textMatch && startDateMatch && endDateMatch
    })
    visibleExpenses.sort((a, b) => {
        if (sortBy === "amount") {
            return a.amount > b.amount ? -1 : 1
        } else {
            return a.createdAt > b.createdAt ? -1 : 1
        }

    })
    return visibleExpenses
}


const expensesReducerDefaultState = []
const filtersReducerDefaultState = {
    text: "",
    sortBy: "date",
    startDate: undefined,
    endDate: undefined
}

const expensesReducer = (state = expensesReducerDefaultState, action) => {
    switch (action.type) {
        case "ADD_EXPENSE":
            return [...state, action.expense]
        case "REMOVE_EXPENSE":
            return state.filter((item) => item.id !== action.id)
        case "EDIT_EXPENSE":
            return state.map((item) => {
                if (item.id === action.id) {
                    return { ...item, ...action.changes }
                } else {
                    return item
                }
            })
        default:
            return state;
    }
}

const filtersReducer = (state = filtersReducerDefaultState, action) => {
    switch (action.type) {
        case "SET_TEXT_FILTER": {
            return {
                ...state,
                text: action.text
            }
        }
        case "SORT_BY_DATE":
            return {
                ...state,
                sortBy: "date"
            }
        case "SORT_BY_AMOUNT":
            return {
                ...state,
                sortBy: "amount"
            }
        case "SET_START_DATE":
            return {
                ...state,
                startDate: action.startDate
            }
        case "SET_END_DATE":
            return {
                ...state,
                endDate: action.endDate
            }
        default:
            return state
    }
}

const store = createStore(combineReducers({
    expenses: expensesReducer,
    filters: filtersReducer
}))

store.subscribe(() => {
    const { expenses, filters } = store.getState()
    const visibleExpenses = getVisibleExpenses(expenses, filters)
    console.log(visibleExpenses)
})

const expenseOne = store.dispatch(addExpense({ description: "rent", amount: 500, createdAt: 1000 }))
const expenseTwo = store.dispatch(addExpense({ description: "restaurant", amount: 200, createdAt: -1000 }))
const expenseThree = store.dispatch(addExpense({ description: "coffee", amount: 200 }))


// store.dispatch(removeExpense({ id: expenseTwo.expense.id }))

// store.dispatch(editExpense(expenseOne.expense.id, { description: "coffee", amount: 50 }))


// store.dispatch(setTextFilter("re"))

// store.dispatch(setTextFilter())

store.dispatch(sortByDate())

// store.dispatch(sortByDate())

// store.dispatch(setStartDate(45))
// store.dispatch(setEndDate(1099))
// store.dispatch(setStartDate())
// store.dispatch(setEndDate())

const demoState = {
    expenses: [
        {
            id: "pdihsiinnd",
            description: "monthly rent",
            note: "house rent for january",
            amount: 10000,
            createdAt: 0
        }
    ],

    filters: {
        text: "rent",
        sortBy: "amount",  //amount or date
        startDate: undefined,
        endDate: undefined
    }
}