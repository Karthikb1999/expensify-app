import configureMockStore from "redux-mock-store"
import thunk from "redux-thunk"
import { addExpense, removeExpense, editExpense, startAddExpense, setExpenses, startSetExpenses, startRemoveExpense, startEditExpense } from "../../actions/expenses"
import expenses from "../fixtures/expenses"
import database from "../../firebase/firebase"

const createMockStore = configureMockStore([thunk])
const uid = "userid123"
const defaultAuthState = { auth: { uid } }


beforeEach((done) => {
    const expensesData = {}
    expenses.forEach(({ id, description, createdAt, note, amount }) => {
        expensesData[id] = { description, createdAt, note, amount }
    })
    database.ref(`users/${uid}/expenses`).set(expensesData).then(() => done())
})



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
    const store = createMockStore(defaultAuthState)

    store.dispatch(startAddExpense(expense)).then(() => {
        const actions = store.getActions()
        expect(actions[0]).toEqual({
            type: "ADD_EXPENSE",
            expense: {
                id: expect.any(String),
                ...expense
            }
        })
        return database.ref(`users/${uid}/expenses/${actions[0].expense.id}`).once('value')
    }).then((snapshot) => {
        expect(snapshot.val()).toEqual(expense)
        done()
    })
})

test("should add expense with defaults to database and store", (done) => {
    const expense = {
        description: "",
        amount: 0,
        note: "",
        createdAt: 0
    }
    const store = createMockStore(defaultAuthState)

    store.dispatch(startAddExpense({})).then(() => {
        const actions = store.getActions()
        expect(actions[0]).toEqual({
            type: "ADD_EXPENSE",
            expense: {
                id: expect.any(String),
                ...expense
            }
        })
        return database.ref(`users/${uid}/expenses/${actions[0].expense.id}`).once('value')
    }).then((snapshot) => {
        expect(snapshot.val()).toEqual(expense)
        done()
    })
})


test("should add set expense action object to the store correctly", () => {
    const action = setExpenses(expenses)
    expect(action).toEqual({
        type: "SET_EXPENSES",
        expenses
    })
})

test("should set expenses in store with the existing expenses in the database", (done) => {
    const store = createMockStore(defaultAuthState)

    store.dispatch(startSetExpenses()).then(() => {
        const actions = store.getActions()
        expect(actions[0]).toEqual({
            type: "SET_EXPENSES",
            expenses
        })
        done()
    })
})

test("should remove expense from the database and store", (done) => {
    const store = createMockStore(defaultAuthState)

    store.dispatch(startRemoveExpense(expenses[0].id)).then(() => {
        const actions = store.getActions()
        expect(actions[0]).toEqual({
            type: "REMOVE_EXPENSE",
            id: expenses[0].id
        })
        database.ref(`users/${uid}/expenses/${expenses[0].id}`).once("value").then((snapshot) => {
            expect(snapshot.val()).toBeNull()
            done()
        })
    })
})

test("should edit expense both in database and store", (done) => {
    const store = createMockStore(defaultAuthState)
    const id = expenses[0].id
    const { description, note, createdAt, amount } = expenses[0]
    const changes = {
        description: "hat",
        amount: 918,
        createdAt: 0,
        note: ""
    }
    store.dispatch(startEditExpense(id, changes))
        .then(() => {
            const actions = store.getActions()
            expect(actions[0]).toEqual({
                type: "EDIT_EXPENSE",
                id,
                changes
            })
            return database.ref(`users/${uid}/expenses/${expenses[0].id}`).once("value")
        }).then((snapshot) => {
            expect(snapshot.val()).toEqual({
                description, note, createdAt, amount, ...changes
            })
            done()
        })
})