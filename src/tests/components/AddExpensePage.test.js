import { AddExpensePage } from "../../components/AddExpensePage";
import React from "react";
import { shallow } from "enzyme";
import expenses from "../fixtures/expenses"


let addExpense, history, wrapper

beforeAll(() => {
    addExpense = jest.fn()
    history = {
        push: jest.fn()
    }
    wrapper = shallow(<AddExpensePage addExpense={addExpense} history={history} />)
})


test("should render add render page correctly", () => {

    expect(wrapper).toMatchSnapshot()
})


test("should add expense on submit", () => {
    wrapper.find("ExpenseForm").prop("onSubmit")(expenses[0])
    expect(addExpense).toHaveBeenLastCalledWith(expenses[0])
    expect(history.push).toHaveBeenLastCalledWith("/")
})