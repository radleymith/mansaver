import React from 'react';

const Login = React.createClass({
    render: function () {
        return (
            <div>
                <h2 id="login-header" className="">
                    Login
                </h2>
                <input type="email" placeholder="Email" />
                <input type="password" placeholder="Password" />
            </div>
        );
    }
});

export default Login;