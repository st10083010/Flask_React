import { Link, Outlet } from "react-router-dom";
import './layout.css';

const Layout = () => {
    // Layout
    return (
        <>
            <div className="layout">
                <Link to={"/"}>Home</Link>
                <Link to={"/login"}>Login</Link>
            </div>
            <div id="detail">
                <Outlet/>
            </div>
        </>
    )
}

export default Layout;