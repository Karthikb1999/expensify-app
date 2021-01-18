import { EditExpensePage } from "../../components/EditExpensePage";
import React from "react";
import { shallow } from "enzyme";
import expenses from "../fixtures/expenses"


let editExpense, removeExpense, history, wrapper, match


beforeAll(() => {
    editExpense = jest.fn()
    removeExpense = jest.fn()
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
        editExpense={editExpense}
        removeExpense={removeExpense}
        history={history}
        expense={expenses[0]}
    />)
})

test("should render edit expense page correctly", () => {
    expect(wrapper).toMatchSnapshot()
})

test("should change the expense on submitting", () => {

    wrapper.find("ExpenseForm").prop("onSubmit")(expenses[0])

    expect(editExpense).toHaveBeenLastCalledWith(expenses[0].id, expenses[0])

    expect(history.push).toHaveBeenLastCalledWith("/")
})

test("should remove the expense on clicking remove button", () => {
    const id = expenses[0].id

    wrapper.find("button").prop("onClick")()

    expect(removeExpense).toHaveBeenLastCalledWith(id)
    expect(history.push).toHaveBeenLastCalledWith("/")
})



