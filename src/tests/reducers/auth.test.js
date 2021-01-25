import authReducer from "../../reducers/auth"


test("should initialise the state to an empty object", () => {
    const state = authReducer(undefined, { type: "@@INIT" })
    expect(state).toEqual({})
})

test("should setup state property uid when logged in", () => {
    const uid = "userid123"
    const action = {
        type: "LOGIN",
        uid
    }
    const state = authReducer(undefined, action)
    expect(state).toEqual({
        uid
    })
})

test("should remove uid property when logged out", () => {
    const uid = "userid123"
    const action = {
        type: "LOGOUT"
    }
    const state = authReducer({ uid }, action)
    expect(state).toEqual({})
})