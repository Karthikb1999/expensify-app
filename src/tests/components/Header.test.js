import { Header } from "../../components/Header";
import { shallow } from "enzyme"
import React from "react"


test("should render header component correctly", () => {
    const wrapper = shallow(<Header startLogout={() => { }} />)
    expect(wrapper).toMatchSnapshot()
})

test("should have called LogOut on button click", () => {
    const startLogout = jest.fn()
    const wrapper = shallow(<Header startLogout={startLogout} />)
    wrapper.find("button").prop("onClick")()
    expect(startLogout).toHaveBeenCalled()
})