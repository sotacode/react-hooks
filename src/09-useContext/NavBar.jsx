import { Link, NavLink } from "react-router-dom"
/* 
            <Link to="/">Home</Link><br />
            <Link to="about">About</Link><br />
            <Link to="login">Login</Link><br />
            <Link to="default">Default</Link><br />

 */
export const NavBar = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark rounded-3" >
                {/* <Link className="navbar-brand" to="/">Home</Link> */}

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <NavLink
                            className={ ({isActive}) => `nav-link ${ isActive ? 'active' : ''}` }
                            to="/"
                        >
                            Home
                        </NavLink>
                        <NavLink
                            className={ ({isActive}) => `nav-link ${ isActive ? 'active' : ''}` }
                            to="about"
                        >
                            About
                        </NavLink>
                        <NavLink
                            className={ ({isActive}) => `nav-link ${ isActive ? 'active' : ''}` }
                            to="default"
                        >
                            Default
                        </NavLink>
                        <NavLink
                            className={ ({isActive}) => `nav-link ${ isActive ? 'active' : ''}` }
                            to="login"
                        >
                            Login
                        </NavLink>
                    </ul>
                </div>
            </nav >
        </>
    )
}
