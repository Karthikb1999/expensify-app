import configureMockStore from "redux-mock-store"
import thunk from "redux-thunk"
import { addExpense, removeExpense, editExpense, startAddExpense } from "../../actions/expenses"
import expenses from "../fixtures/expenses"
import database from "../../firebase/firebase"

const createMockStore = configureMockStore([thunk])


test("should add remove expense action object", (() => {
    const action = removeExpense({ id: "123" })
    expect(action).toEqual({
        type: "REMOVE_EXPENSE",
        id: "123"
    })
}))

test("should add edit expense action object", () => {
    const id = "123"
    const changes = { note: "new note value" }
    const action = editExpense(id, changes)
    expect(action).toEqual({
        type: "EDIT_EXPENSE",
        id: "123",
        changes: {
            note: "new note value"
        }
    })
})


test("should add add expense action object with provided parameters", () => {
    const action = addExpense(expenses[1])
    expect(action).toEqual({
        type: "ADD_EXPENSE",
        expense: expenses[1]
    })
})


test("should add expense to database and store", (done) => {
    const expense = {
        description: "cab",
        amount: 100,
        note: "booked a cab",
        createdAt: 183715
    }
    const store = createMockStore({})

    store.dispatch(startAddExpense(expense)).then(() => {
        const actions = store.getActions()
        expect(actions[0]).toEqual({
            type: "ADD_EXPENSE",
            expense: {
                id: expect.any(String),
                ...expense
            }
        })
        return database.ref(`expenses/${actions[0].expense.id}`).once('value')
    }).then((snapshot) => {
        expect(snapshot.val()).toEqual(expense)
        done()
    })
})

test("should add expense with defaults to database and store", () => {
    const expense = {
        description: "",
        amount: 0,
        note: "",
        createdAt: 0
    }
    const store = createMockStore({})

    store.dispatch(startAddExpense()).then(() => {
        const actions = store.getActions()
        expect(actions[0]).toEqual({
            type: "ADD_EXPENSE",
            expense: {
                id: expect.any(String),
                ...expense
            }
        })
        return database.ref(`expenses/${actions[0].expense.id}`).once('value')
    }).then((snapshot) => {
        expect(snapshot.val()).toEqual(expense)
        done()
    })
})

// test("should add add expense action object with default parameters", () => {
//     const action = addExpense()
//     expect(action).toEqual({
//         type: "ADD_EXPENSE",
//         expense: {
//             id: expect.any(String),
//             description: "",
//             amount: 0,
//             note: "",
//             createdAt: 0
//         }
//     })
// })