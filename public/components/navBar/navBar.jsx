import React from 'react';
import NavLink from '../navLink/navLink.jsx'
import './navBar.less';

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
                    <li id="nav-login" className="nav-bar-item">
                        <NavLink to="/login">
                            Login
                        </NavLink>
                    </li>
                    <li id="nav-register" className="nav-bar-item">
                        <NavLink to="/register">
                            Register
                        </NavLink>
                    </li>
                </ul>
            </div>         
        );
    }
});

export default NavBar;