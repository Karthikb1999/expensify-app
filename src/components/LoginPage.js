import React from "react"
import { startLogin } from "../actions/auth"
import { connect } from "react-redux"


export const LoginPage = ({ startLogin }) => {
    return (
        <div>
            <button onClick={startLogin}>Log In</button>
        </div>
    )
}

const mapDispatchtoProps = (dispatch) => ({
    startLogin: () => {
        dispatch(startLogin())
    }
})

export default connect(undefined, mapDispatchtoProps)(LoginPage)