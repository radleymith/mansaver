import React from 'react';

const Register = React.createClass({
    render: function () {
        return (
            <div>
                <h2 id="register-header" className="">
                    Register
                </h2>
                <form method="POST">
                    <input type="text" placeholder="First Name" />
                    <input type="text" placeholder="Last Name" />
                    <input type='tel' pattern='[\+]\d{2}[\(]\d{2}[\)]\d{4}[\-]\d{4}' placeholder="Phone" />
                    <input type="email" placeholder="Email" />
                    <input type="text" placeholder="Address" />
                    <input type="number" placeholder="Zip Code" />
                    <input type="password" placeholder="Password" />
                    <input type="password" placeholder="Password" />
                </form>
            </div>
        );
    }
});

export default Register;