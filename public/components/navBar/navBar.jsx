import React from 'react';
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
                    <Link to="/expect" activeClassName='-active'>
                        What to Expect
                    </Link>
                </li>
                <li id="nav-subscribe" className="nav-bar-item">
                    <Link to="/subscribe" activeClassName='-active'>
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
                        <LoginLink to="/login" activeClassName='-active'>
                            Login
                        </LoginLink>
                    </li>
                </NotAuthenticated>
                <NotAuthenticated>
                    <li id="nav-register" className="nav-bar-item">
                        <Link to="/register" activeClassName='-active'>
                            Register
                        </Link>
                    </li>
                </NotAuthenticated>
                <Authenticated>
                    <li id="nav-profile" className="nav-bar-item">
                        <Link to="/me" activeClassName='-active'>
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