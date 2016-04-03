import React from 'react';
// import NavLink from '../navLink/navLink.jsx'
import { Link } from 'react-router';
import './navBar.less';
import { NotAuthenticated, Authenticated, LoginLink, LogoutLink } from 'react-stormpath';

const NavBar = () => {
    return (
        <div id="nav-bar" className="pull-right">
            <ul className="nav navbar-nav" role="nav">
                <li id="nav-about" className="nav-bar-item">
                    <Link to="/" onlyActiveOnIndex>
                        About
                    </Link>
                </li>
                <li id="nav-what-to-expect" className="nav-bar-item">
                    <Link to="/expect">
                        What to Expect
                    </Link>
                </li>
                <li id="nav-subscribe" className="nav-bar-item">
                    <Link to="/subscribe">
                        Subscribe
                    </Link>
                </li>
                <li id="nav-pipe" className="nav-bar-item">
                    <a>
                        |
                    </a>
                </li>
                <NotAuthenticated>
                    <li id="nav-login" className="nav-bar-item">
                        <LoginLink to="/login">
                            Login
                        </LoginLink>
                    </li>
                </NotAuthenticated>
                <NotAuthenticated>
                    <li id="nav-register" className="nav-bar-item">
                        <Link to="/register">
                            Register
                        </Link>
                    </li>
                </NotAuthenticated>
                <Authenticated>
                    <li id="nav-profile" className="nav-bar-item">
                        <Link to="/me">
                            Profile 
                        </Link>
                    </li>
                </Authenticated>
                <Authenticated>
                    <li id="nav-profile" className="nav-bar-item">
                        <LogoutLink />
                    </li>
                </Authenticated>
            </ul>
        </div>         
    );
};


export default NavBar;