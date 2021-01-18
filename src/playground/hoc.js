import React from "react"
import ReactDOM from "react-dom"



const Info = (props) => (
    <div>
        <h1>This is some Info</h1>
        <p>The information is: {props.info}</p>
    </div>
)


const withAdminWarning = (WrappedComponent) => {
    return (props) => (
        <div>
            {props.isAdmin && <p>This is private information.please Dont share</p>}
            <WrappedComponent {...props} />
        </div>
    )
}

const requireAuthentication = (WrappedComponent) => {
    return (props) => (
        <div>
            {props.isAuthenticated && <WrappedComponent {...props} /> || <p>Authentication Failed!</p>}
        </div>
    )
}


const AdminInfo = withAdminWarning(Info)

const AuthInfo = requireAuthentication(AdminInfo)

ReactDOM.render(<AuthInfo
    isAuthenticated={true}
    isAdmin={true}
    info={"these are the info"}
/>, document.getElementById("app"))