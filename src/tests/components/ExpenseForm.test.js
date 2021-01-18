import ExpenseForm from "../../components/ExpenseForm"
import React from "react"
import { shallow } from "enzyme"
import expenses from "../fixtures/expenses"
import moment from "moment"

test("should render Expense Form correctly", () => {
    const wrapper = shallow(<ExpenseForm />)
    expect(wrapper).toMatchSnapshot()
})


test("should render Expense Form with provided expense", () => {
    const wrapper = shallow(<ExpenseForm expense={expenses[0]} />)
    expect(wrapper).toMatchSnapshot()
})

test("should show error when invalid data is submitted", () => {
    const wrapper = shallow(<ExpenseForm />)
    expect(wrapper).toMatchSnapshot()
    wrapper.find("form").simulate("submit", {
        preventDefault: () => { }
    })
    expect(wrapper.state("error").length).toBeGreaterThan(0)
    expect(wrapper).toMatchSnapshot()
})

test("should set description when changed", () => {
    const value = "car"
    const wrapper = shallow(<ExpenseForm />)
    wrapper.find("input").at(0).simulate("change", {
        target: { value }
    })
    expect(wrapper.state("description")).toBe(value)
})


test("should set note when text change", () => {
    const value = "note"
    const wrapper = shallow(<ExpenseForm />)
    wrapper.find("textarea").simulate("change", {
        target: { value }
    })
    expect(wrapper.state("note")).toBe(value)
})


test("should set amount for input of valid format", () => {
    const value = "132.23"
    const wrapper = shallow(<ExpenseForm />)
    wrapper.find("input").at(1).simulate("change", {
        target: { value }
    })
    expect(wrapper.state("amount")).toBe(value)
})

test("should not set amount for input of invalid format", () => {
    const value = "123.333"
    const wrapper = shallow(<ExpenseForm />)
    wrapper.find("input").at(1).simulate("change", {
        target: { value }
    })
    expect(wrapper.state("amount")).toBe('')
})

test("should call onSubmit for valid form submission", () => {
    const onSubmitSpy = jest.fn()
    const wrapper = shallow(<ExpenseForm expense={expenses[0]} onSubmit={onSubmitSpy} />)
    wrapper.find("form").simulate("submit", {
        preventDefault: () => { }
    })
    expect(wrapper.state("error")).toBe('')
    expect(onSubmitSpy).toHaveBeenLastCalledWith({
        description: expenses[0].description,
        amount: expenses[0].amount,
        createdAt: expenses[0].createdAt,
        note: expenses[0].note
    })
})

test("should change createdAt on changing the date", () => {
    const now = moment()
    const wrapper = shallow(<ExpenseForm />)
    wrapper.find("SingleDatePicker").prop('onDateChange')(now)
    expect(wrapper.state("createdAt")).toBe(now)
})

test("should change focus property on focus change", () => {
    const focused = true
    const wrapper = shallow(<ExpenseForm />)
    wrapper.find("SingleDatePicker").prop('onFocusChange')({ focused })
    expect(wrapper.state("calenderFocused")).toBe(focused)
})