import ExpenseDashBoardPage from "../../components/ExpenseDashBoardPage"
import React from "react"
import { shallow } from "enzyme"


test("should render Expense DashBoard Page", () => {
    const wrapper = shallow(<ExpenseDashBoardPage />)
    expect(wrapper).toMatchSnapshot()
})