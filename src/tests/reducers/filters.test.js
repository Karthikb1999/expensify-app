import filterReducer from "../../reducers/filters";
import moment from "moment"



test("should initialise state to default values", () => {
    const action = { type: "@@INIT" }
    const state = filterReducer(undefined, action)
    expect(state).toEqual({
        text: "",
        sortBy: "date",
        startDate: moment().startOf("month"),
        endDate: moment().endOf("month")
    })
})

test("should set sortBy to amount", () => {
    const action = { type: "SORT_BY_AMOUNT" }
    const state = filterReducer(undefined, action)
    expect(state.sortBy).toBe("amount")
})

test("should set sortBy to date", () => {
    const action = { type: "SORT_BY_DATE" }
    const defaultState = {
        text: "",
        sortBy: "amount",
        startDate: undefined,
        endDate: undefined
    }
    const state = filterReducer(defaultState, action)
    expect(state.sortBy).toBe("date")
})

test("should set text in store to given value", () => {
    const text = "123"
    const action = {
        type: "SET_TEXT_FILTER",
        text
    }
    const state = filterReducer(undefined, action)
    expect(state.text).toBe(text)
})

test("should set startDate to given date", () => {
    const startDate = moment().add(1, "month")
    const action = {
        type: "SET_START_DATE",
        startDate
    }
    const state = filterReducer(undefined, action)
    expect(state.startDate).toBe(startDate)
})


test("should set startDate to given date", () => {
    const endDate = moment().add(1, "month")
    const action = {
        type: "SET_END_DATE",
        endDate
    }
    const state = filterReducer(undefined, action)
    expect(state.endDate).toBe(endDate)
})



