import React from 'react';
import './navBar.less';

const NavBar = React.createClass({
    render: function () {
        return (
            <div id="nav-bar" className="pull-right">
                <ul className="nav navbar-nav">
                    <li id="nav-about" className="nav-bar-item">
                        <a href="#about">
                            About
                        </a>
                    </li>
                    <li id="nav-what-to-expect" className="nav-bar-item">
                        <a href="#what-to-expect">
                            What to Expect
                        </a>
                    </li>
                    <li id="nav-pipe" className="nav-bar-item">
                        <a>
                            |
                        </a>
                    </li>
                    <li id="nav-login" className="nav-bar-item">
                        <a href="login_page">
                            Login
                        </a>
                    </li>
                    <li id="nav-register" className="nav-bar-item">
                        <a href="register_page">
                            Register
                        </a>
                    </li>
                </ul>
            </div>         
        );
    }
});

export default NavBar;