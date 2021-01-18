import ExpenseListItem from "../../components/ExpenseListItem"
import React from "react"
import { shallow } from "enzyme"
import expenses from "../fixtures/expenses"

test("should render expense list item ", () => {
    const wrapper = shallow(<ExpenseListItem  {...expenses[0]} />)
    expect(wrapper).toMatchSnapshot()
})