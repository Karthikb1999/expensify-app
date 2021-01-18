import moment from "moment"

export default (expenses, { text, sortBy, startDate, endDate }) => {
    const visibleExpenses = expenses.filter((item) => {
        const createdAtMoment = moment(item.createdAt)
        const textMatch = item.description.toLowerCase().includes(text.toLowerCase())
        const startDateMatch = startDate ? startDate.isSameOrBefore(createdAtMoment) : true
        const endDateMatch = endDate ? endDate.isSameOrAfter(createdAtMoment) : true
        return textMatch && startDateMatch && endDateMatch
    })
    visibleExpenses.sort((a, b) => {
        if (sortBy === "amount") {
            return a.amount > b.amount ? -1 : 1
        } else {
            return a.createdAt > b.createdAt ? -1 : 1
        }

    })
    return visibleExpenses
}