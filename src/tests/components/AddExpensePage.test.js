import { AddExpensePage } from "../../components/AddExpensePage";
import React from "react";
import { shallow } from "enzyme";
import expenses from "../fixtures/expenses"


let startAddExpense, history, wrapper

beforeAll(() => {
    startAddExpense = jest.fn()
    history = {
        push: jest.fn()
    }
    wrapper = shallow(<AddExpensePage startAddExpense={startAddExpense} history={history} />)
})


test("should render add render page correctly", () => {

    expect(wrapper).toMatchSnapshot()
})


test("should add expense on submit", () => {
    wrapper.find("ExpenseForm").prop("onSubmit")(expenses[0])
    expect(startAddExpense).toHaveBeenLastCalledWith(expenses[0])
    expect(history.push).toHaveBeenLastCalledWith("/")
})