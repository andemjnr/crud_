import { useStateContext } from "../contexts/ContextProvider";
import {Link, Navigate, Outlet } from "react-router-dom";

export default function DefaultLayout(){
    const {User, token} = useStateContext()

    if (!token) {
        return <Navigate to="/login" />
    }

    const onLogout = (ev) => {
        ev.preventDefault()
    }
    return (
        <div id="defaultLayout">

            <aside>
                <Link to="/dashboard"> Dashboard</Link>
                <Link to="/users"> Users</Link>
            </aside>
            <div className="content">
                <header>
                    <div>
                        Header
                    </div>
                    <div>
                        {User.name}
                        <a href="#" onClick={onLogout} className="btn-logout">Logout</a>
                    </div>
                </header>
                <main>
                    <Outlet/>
                </main>

            </div>
        </div>
    )
}