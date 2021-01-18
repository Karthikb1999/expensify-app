import React from "react"
import AppRouter from "./routers/AppRouter"
import ReactDOM from "react-dom"
import { Provider } from "react-redux";
import configureStore from "./store/configureStore";
import { addExpense } from "./actions/expenses"
import { setTextFilter } from "./actions/filters"
import getVisibleExpenses from "./selectors/expenses"
import "normalize.css/normalize.css"
import "./styles/styles.scss"
import 'react-dates/lib/css/_datepicker.css'



const store = configureStore()

// store.subscribe(() => {
//     const { expenses, filters } = store.getState()
//     const visibleExpenses = getVisibleExpenses(expenses, filters)
//     console.log(visibleExpenses)
// })

store.dispatch(addExpense({ description: "Water bill", amount: 100, createdAt: 1000 }))

store.dispatch(addExpense({ description: "Gas bill", amount: 50, createdAt: -1000 }))

store.dispatch(addExpense({ description: "Rent", amount: 1000, createdAt: 0 }))



const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
)



const rootEl = document.getElementById("app")
ReactDOM.render(jsx, rootEl)

