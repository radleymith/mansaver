import React, { Component } from 'react';
import { LoginForm } from 'react-stormpath'

class Login extends Component {
    render () {
        return (
            <div>
                <h2 id="login-header" className="">
                    Login
                </h2>
                <LoginForm redirectTo="/me" />
            </div>
        );
    }
};

export default Login;