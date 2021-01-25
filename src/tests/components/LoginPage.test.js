import React from "react"
import { shallow } from "enzyme"
import { LoginPage } from "../../components/LoginPage"

test("should render Login Page correctly", () => {
    const wrapper = shallow(<LoginPage startLogin={() => { }} />)
    expect(wrapper).toMatchSnapshot()
})

test("should render Login Page correctly", () => {
    const startLogin = jest.fn()
    const wrapper = shallow(<LoginPage startLogin={startLogin} />)
    wrapper.find("button").prop("onClick")()
    expect(startLogin).toHaveBeenCalled()
})
