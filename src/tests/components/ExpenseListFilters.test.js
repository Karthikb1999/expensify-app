import { ExpenseListFilters } from "../../components/ExpenseListFilters"
import React from "react";
import { shallow } from "enzyme";
import { altFilters, filters } from "../fixtures/filters"
import moment from "moment"


let setStartDate, setEndDate, sortByAmount, sortByDate, setTextFilter, wrapper;

beforeEach(() => {
    setStartDate = jest.fn();
    setEndDate = jest.fn();
    sortByAmount = jest.fn();
    sortByDate = jest.fn();
    setTextFilter = jest.fn();
    wrapper = shallow(<ExpenseListFilters
        setStartDate={setStartDate}
        setEndDate={setEndDate}
        sortByAmount={sortByAmount}
        sortByDate={sortByDate}
        setTextFilter={setTextFilter}
        filters={filters}
    />)
})


test("should render ExpenseListFilters correctly", () => {
    expect(wrapper).toMatchSnapshot()
})

test("should render ExpenseListFilters with alt data correctly", () => {
    wrapper.setProps({ filters: altFilters })
    expect(wrapper).toMatchSnapshot()
})

test("should handle textChange", () => {
    const value = "gas"
    const change = {
        target: {
            value
        }
    }
    wrapper.find("input").prop("onChange")(change)
    expect(setTextFilter).toHaveBeenLastCalledWith(value)
})

test("should sort by date", () => {
    wrapper.setProps({ filters: altFilters })
    const value = "date"
    const change = {
        target: {
            value
        }
    }
    wrapper.find("select").prop("onChange")(change)
    expect(sortByDate).toHaveBeenCalled()
})


test("should sort by amount", () => {
    const value = "amount"
    const change = {
        target: {
            value
        }
    }
    wrapper.find("select").prop("onChange")(change)
    expect(sortByAmount).toHaveBeenCalled()
})

test("should handle date changes", () => {
    const startDate = moment(0)
    const endDate = moment(0).add(3, "day")
    const dateChange = {
        startDate,
        endDate
    }
    wrapper.find("DateRangePicker").prop("onDatesChange")(dateChange)
    expect(setStartDate).toHaveBeenLastCalledWith(startDate)
    expect(setEndDate).toHaveBeenLastCalledWith(endDate)
})

test("should hange datefocus change", () => {
    wrapper.find("DateRangePicker").prop("onFocusChange")("endDate")
    expect(wrapper.state("calendarFocus")).toBe("endDate")
})



