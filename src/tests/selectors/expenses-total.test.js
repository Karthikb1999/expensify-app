import selectExpensesTotal from "../../selectors/expenses-total"
import expenses from "../fixtures/expenses"


test("Should equal zero when empty expenses is provided", () => {
    expect(selectExpensesTotal([])).toBe(0)
})

test("Should correcty add up a single expense", () => {
    expect(selectExpensesTotal([expenses[0]])).toBe(expenses[0].amount)
})

test("should correctly add up multiple expense", () => {
    const total = expenses.map((expense) => expense.amount).reduce((acc, curr) => acc + curr)
    expect(selectExpensesTotal(expenses)).toBe(total)
})