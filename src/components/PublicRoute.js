import React from "react"
import { connect } from "react-redux"
import { Route, Redirect } from "react-router-dom"
import Header from "../components/Header"


export const PublicRoute = ({ component: Component, isAuthenticated, ...rest }) => (
    <div>
        <Route {...rest} component={(props) => {
            return !isAuthenticated ? (<div>
                <Header />
                <Component {...props} />
            </div>) : (
                    <Redirect to="/dashboard" />
                )
        }} />
    </div>
)

const mapStateToProps = (state) => ({
    isAuthenticated: !!state.auth.uid
})

export default connect(mapStateToProps)(PublicRoute)