import { ExpenseSummary } from "../../components/ExpenseSummary"
import { shallow } from "enzyme"
import React from "react"

test("should render summary with single summary correctly", () => {
    const expensesCount = 1
    const expensesTotal = 100
    const wrapper = shallow(<ExpenseSummary
        expensesCount={expensesCount}
        expensesTotal={expensesTotal}
    />)
    expect(wrapper).toMatchSnapshot()
})

test("should render summary with multi summary correctly", () => {
    const expensesCount = 5
    const expensesTotal = 1000
    const wrapper = shallow(<ExpenseSummary
        expensesCount={expensesCount}
        expensesTotal={expensesTotal}
    />)
    expect(wrapper).toMatchSnapshot()
})