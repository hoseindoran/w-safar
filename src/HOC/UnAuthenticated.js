import { Navigate } from "react-router-dom";

const UnAuthenticated = (Component) => {
    
    const user = localStorage.getItem("token");

    return (props) => (
        localStorage.getItem("token") ? <Component {...props}  /> : <Navigate to='/login' />
    )
}

export default UnAuthenticated;