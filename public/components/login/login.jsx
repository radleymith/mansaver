import React from 'react';
import { LoginForm } from 'react-stormpath'

//TODO: Add profile page and redirect to there
const Login = React.createClass({
    render: function () {
        return (
            <div>
                <h2 id="login-header" className="">
                    Login
                </h2>
                <LoginForm redirectTo="/expect" />
            </div>
        );
    }
});

export default Login;