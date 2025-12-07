import { NavLink } from "react-router-dom"

 function LinkLayout({full}){
    return(
        <section className={`links ${full? "" : "w0"}`}>
            <div className="pro-name">
                ORVICO
            </div>
            <nav>
                <NavLink to="/dashboards">Dashboard</NavLink>
                <NavLink to="/service">Service</NavLink>
                <NavLink to="/worker">Worker</NavLink>
                <NavLink to="/customer">Customer</NavLink>
                <NavLink to="/bookservice">Book Service</NavLink>
                <NavLink to="/createadmin">Admins</NavLink>
            </nav>
        </section>
    )
}
export default LinkLayout
