import React from 'react';
import { Input } from 'react-bootstrap';

const Login = React.createClass({
    render: function () {
        return (
            <div>
                <h2 id="login-header" className="">
                    Login
                </h2>
                <form method="POST">
                    <Input type="email" placeholder="Email" />
                    <Input type="password" placeholder="Password" />
                </form>
            </div>
        );
    }
});

export default Login;