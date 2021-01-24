import React from "react"
import AppRouter from "./routers/AppRouter"
import ReactDOM from "react-dom"
import { Provider } from "react-redux";
import configureStore from "./store/configureStore";
import "normalize.css/normalize.css"
import "./styles/styles.scss"
import 'react-dates/lib/css/_datepicker.css'
import './firebase/firebase'
import { startSetExpenses } from "./actions/expenses"


const store = configureStore()


const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
)


const rootEl = document.getElementById("app")

ReactDOM.render(<p>Loading...</p>, rootEl)

store.dispatch(startSetExpenses()).then(() => {
    ReactDOM.render(jsx, rootEl)
})



