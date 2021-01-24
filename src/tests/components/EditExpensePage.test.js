import { EditExpensePage } from "../../components/EditExpensePage";
import React from "react";
import { shallow } from "enzyme";
import expenses from "../fixtures/expenses"


let startEditExpense, startRemoveExpense, history, wrapper, match


beforeAll(() => {
    startEditExpense = jest.fn()
    startRemoveExpense = jest.fn()
    history = {
        push: jest.fn()
    }
    const id = expenses[0].id
    const match = {
        params: {
            id
        }
    }
    wrapper = shallow(<EditExpensePage
        startEditExpense={startEditExpense}
        startRemoveExpense={startRemoveExpense}
        history={history}
        expense={expenses[0]}
    />)
})

test("should render edit expense page correctly", () => {
    expect(wrapper).toMatchSnapshot()
})

test("should change the expense on submitting", () => {

    wrapper.find("ExpenseForm").prop("onSubmit")(expenses[0])

    expect(startEditExpense).toHaveBeenLastCalledWith(expenses[0].id, expenses[0])

    expect(history.push).toHaveBeenLastCalledWith("/")
})

test("should remove the expense on clicking remove button", () => {
    const id = expenses[0].id

    wrapper.find("button").prop("onClick")()

    expect(startRemoveExpense).toHaveBeenLastCalledWith(id)
    expect(history.push).toHaveBeenLastCalledWith("/")
})



