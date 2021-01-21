import { ExpenseDashBoardPage } from "../../components/ExpenseDashBoardPage"
import React from "react"
import { shallow } from "enzyme"
import expenses from "../fixtures/expenses"

test("should render Expense DashBoard Page", () => {
    const wrapper = shallow(<ExpenseDashBoardPage expenses={expenses} />)
    expect(wrapper).toMatchSnapshot()
})