import moment from "moment"

export default [{
    id: '1',
    description: "car",
    amount: 20000,
    createdAt: moment(0).valueOf()
}, {
    id: '2',
    description: "rent",
    amount: 10000,
    createdAt: moment(0).subtract(4, "day").valueOf()
}, {
    id: '3',
    description: "bike",
    amount: 15000,
    createdAt: moment(0).add(4, "day").valueOf()
}
]