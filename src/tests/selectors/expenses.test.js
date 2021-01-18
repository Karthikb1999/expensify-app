import getVisibleExpenses from "../../selectors/expenses";
import moment from "moment"
import expenses from "../fixtures/expenses"

test("should generate filtered expenses by startDate", () => {
    const filter = {
        text: "",
        sortBy: "date",
        startDate: moment(0),
        endDate: undefined
    }
    const action = getVisibleExpenses(expenses, filter)
    expect(action).toEqual([expenses[2], expenses[0]])
})

test("should generate filtered expenses by endDate", () => {
    const filter = {
        text: "",
        sortBy: "amount",
        startDate: undefined,
        endDate: moment(0)
    }
    const action = getVisibleExpenses(expenses, filter)
    expect(action).toEqual([expenses[0], expenses[1]])
})

test("should generate filtered expenses by search text", () => {
    const filter = {
        text: "e",
        sortBy: "date",
        startDate: undefined,
        endDate: undefined
    }
    const action = getVisibleExpenses(expenses, filter)
    expect(action).toEqual([expenses[2], expenses[1]])
})

test("should generate sorted expenses by date", () => {
    const filter = {
        text: "",
        sortBy: "date",
        startDate: undefined,
        endDate: undefined
    }
    const action = getVisibleExpenses(expenses, filter)
    expect(action).toEqual([expenses[2], expenses[0], expenses[1]])
})

test("should generate sorted expenses by amount", () => {
    const filter = {
        text: "",
        sortBy: "amount",
        startDate: undefined,
        endDate: undefined
    }
    const action = getVisibleExpenses(expenses, filter)
    expect(action).toEqual([expenses[0], expenses[2], expenses[1]])
})

