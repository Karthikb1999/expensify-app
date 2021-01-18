import expensesReducer from "../../reducers/expenses"
import expenses from "../fixtures/expenses"



test("should initialise the expenses to an empty array", () => {
    const state = expensesReducer(undefined, { type: "@@INIT" })
    expect(state).toEqual([])
})

test("should remove the expense of given id if it is present", () => {
    const action = {
        type: "REMOVE_EXPENSE",
        id: expenses[0].id
    }
    const state = expensesReducer(expenses, action)
    expect(state).toEqual([expenses[1], expenses[2]])
})

test("should keep the expenses array the same,if the given id is not present", () => {
    const action = {
        type: "REMOVE_EXPENSE",
        id: "abc123"
    }
    const state = expensesReducer(expenses, action)
    expect(state).toEqual(expenses)
})

test("should add the expense to the expenses state array", () => {
    const expense = {
        description: "chicken",
        amount: 100,
        createdAt: 234840,
        note: ""
    }
    const action = {
        type: "ADD_EXPENSE",
        expense
    }
    const state = expensesReducer(expenses, action)
    expect(state).toEqual([...expenses, expense])
})

test("should edit an expense if present in expenses array", () => {
    const changes = {
        amount: 12000
    }
    const action = {
        type: "EDIT_EXPENSE",
        id: '3',
        changes
    }
    const state = expensesReducer(expenses, action)
    expect(state[2]).toEqual({ ...expenses[2], ...changes })
})

test("should not edit an expense if id is not present in expenses array", () => {
    const changes = {
        amount: 12000
    }
    const action = {
        type: "EDIT_EXPENSE",
        id: '4',
        changes
    }
    const state = expensesReducer(expenses, action)
    expect(state).toEqual(expenses)
})

