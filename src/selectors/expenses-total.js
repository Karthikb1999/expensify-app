

export default (expenses) => {
    return expenses.map((item) => item.amount).reduce((acc, curr) => acc + curr, 0)
}