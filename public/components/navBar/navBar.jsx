import React from 'react';
import NavLink from '../navLink/navLink.jsx'
import './navBar.less';
import { NotAuthenticated, Authenticated, LoginLink, LogoutLink } from 'react-stormpath';

const NavBar = React.createClass({
    render: function () {
        return (
            <div id="nav-bar" className="pull-right">
                <ul className="nav navbar-nav" role="nav">
                    <li id="nav-about" className="nav-bar-item">
                        <NavLink to="/" onlyActiveOnIndex>
                            About
                        </NavLink>
                    </li>
                    <li id="nav-what-to-expect" className="nav-bar-item">
                        <NavLink to="/expect">
                            What to Expect
                        </NavLink>
                    </li>
                    <li id="nav-subscribe" className="nav-bar-item">
                        <NavLink to="/subscribe">
                            Subscribe
                        </NavLink>
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
                            <NavLink to="/register">
                                Register
                            </NavLink>
                        </li>
                    </NotAuthenticated>
                    <Authenticated>
                        <li id="nav-profile" className="nav-bar-item">
                            <NavLink to="/profile">
                                Profile 
                            </NavLink>
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
    }
});

export default NavBar;