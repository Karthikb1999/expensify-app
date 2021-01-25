import { login, logout } from "../../actions/auth"


test("should return login info object correctly", () => {
    const uid = "userid"
    const action = login(uid)
    expect(action).toEqual({
        type: "LOGIN",
        uid
    })
})

test("should return logout object correctly", () => {
    const action = logout()
    expect(action).toEqual({
        type: "LOGOUT"
    })
})