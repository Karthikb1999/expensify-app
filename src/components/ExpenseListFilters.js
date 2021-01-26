import React from "react";
import { connect } from "react-redux"
import { setTextFilter, sortByAmount, sortByDate, setStartDate, setEndDate } from "../actions/filters"
import { DateRangePicker } from "react-dates"


export class ExpenseListFilters extends React.Component {
    state = {
        calendarFocus: null
    }
    onDatesChange = ({ startDate, endDate }) => {
        this.props.setStartDate(startDate)
        this.props.setEndDate(endDate)
    }
    onFocusChange = (calendarFocus) => {
        this.setState(() => ({
            calendarFocus
        }))
    }
    onTextChange = (e) => {
        this.props.setTextFilter(e.target.value)
    }
    onSortChange = (e) => {
        if (e.target.value === "amount") {
            this.props.sortByAmount()
        } else {
            this.props.sortByDate()
        }
    }
    render() {
        return (
            <div className="container">
                <div className="input-group">
                    <div className="input-group__item">
                        <input type="text"
                            value={this.props.filters.text}
                            placeholder="Search expenses"
                            className="text-input"
                            onChange={this.onTextChange} />
                    </div>
                    <div className="input-group__item">
                        <select
                            value={this.props.filters.sortBy}
                            onChange={this.onSortChange}
                            className="select"
                        >
                            <option value="date">Date</option>
                            <option value="amount">Amount</option>
                        </select>
                    </div>
                    <div className="input-group__item">
                        <DateRangePicker
                            startDate={this.props.filters.startDate}
                            endDate={this.props.filters.endDate}
                            onDatesChange={this.onDatesChange}
                            focusedInput={this.state.calendarFocus}
                            onFocusChange={this.onFocusChange}
                            isOutsideRange={() => false}
                            showClearDates={true}
                            numberOfMonths={1}
                        />
                    </div>
                </div>
            </div>
        )
    }
}


const mapStatetoProps = (state) => ({
    filters: state.filters
})

const mapDispatchtoProps = (dispatch) => ({
    setStartDate: (startDate) => {
        dispatch(setStartDate(startDate))
    },
    setEndDate: (endDate) => {
        dispatch(setEndDate(endDate))
    },
    sortByAmount: () => {
        dispatch(sortByAmount())
    },
    sortByDate: () => {
        dispatch(sortByDate())
    },
    setTextFilter: (text) => {
        dispatch(setTextFilter(text))
    }

})



export default connect(mapStatetoProps, mapDispatchtoProps)(ExpenseListFilters)