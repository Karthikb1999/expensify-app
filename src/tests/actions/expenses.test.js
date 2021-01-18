import { addExpense, removeExpense, editExpense } from "../../actions/expenses"

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
    const expense = {
        description: "notes",
        amount: 100,
        note: "notes is a note",
        createdAt: 1000,
    }
    const action = addExpense(expense)
    expect(action).toEqual({
        type: "ADD_EXPENSE",
        expense: {
            id: expect.any(String),
            ...expense
        }
    })
})

test("should add add expense action object with default parameters", () => {
    const action = addExpense()
    expect(action).toEqual({
        type: "ADD_EXPENSE",
        expense: {
            id: expect.any(String),
            description: "",
            amount: 0,
            note: "",
            createdAt: 0
        }
    })
})