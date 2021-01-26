import React from "react"
import { Link } from "react-router-dom"
import { connect } from "react-redux"
import { startLogout } from "../actions/auth"


export const Header = ({ startLogout }) => (
    <header className="header">
        <div className="container">
            <div className="header__container">
                <Link to="/dashboard" className="header__title">
                    <h1>Expensify</h1>
                </Link>
                <button
                    onClick={startLogout}
                    className="button button--header"
                >Logout</button>
            </div>
        </div>

    </header>
)

const mapDispatchtoProps = (dispatch) => ({
    startLogout: () => dispatch(startLogout())
})

export default connect(undefined, mapDispatchtoProps)(Header)