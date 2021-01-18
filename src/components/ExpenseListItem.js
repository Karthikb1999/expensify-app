import React from "react";
import { Link } from "react-router-dom"



const ExpenseListItem = ({ id, description, amount, createdAt }) => (
    <div>
        <Link to={`/edit/${id}`}>{description}</Link>
        <p>Amount: {amount} Created At: {createdAt}</p>
    </div>
)

export default ExpenseListItem