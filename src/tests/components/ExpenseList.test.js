import { ExpenseList } from "../../components/ExpenseList"
import { shallow } from "enzyme"
import React from "react"
import expenses from "../fixtures/expenses"


test("should render expenseList when expenses is provided", () => {
    const wrapper = shallow(<ExpenseList expenses={expenses} />)
    expect(wrapper).toMatchSnapshot()
})

test("should render expenseList with empty message", () => {
    const wrapper = shallow(<ExpenseList expenses={[]} />)
    expect(wrapper).toMatchSnapshot()
})