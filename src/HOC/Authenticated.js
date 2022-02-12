import { Navigate } from "react-router-dom";

const Authenticated = (Component) => {

    const user = localStorage.getItem("token");
    return (props) => (
        localStorage.getItem("token") ? <Navigate to='/dashboard' /> : <Component {...props} />
    )
}

export default Authenticated;