import {Link, useNavigate} from "react-router-dom"
import { Logout } from "../../Api";

const Header = () => {
    const user = localStorage.getItem("token");
    const navigate = useNavigate();

    const handleLogOut = async () => {
        await Logout().then(res => {
            if(res.ok) {
                localStorage.removeItem("token");
                navigate('/login');
            }
        })
    }

    return (
        <header>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">WSafar</Link>
                    <div className="d-flex text-light">
                        {
                            user ? <button onClick={handleLogOut} className="btn btn-outline-danger text-white">Logout</button> : <Link to="/login" className="btn btn-outline-info text-white">Login</Link>
                        }
                    </div>
                </div>
            </nav>
        </header>
    )
}
export default Header;