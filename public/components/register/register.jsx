import React from 'react';
import { Input } from 'react-bootstrap';

const Register = React.createClass({
    render: function () {
        return (
            <div>
                <h2 id="register-header" className="">
                    Register
                </h2>
                <form method="POST">
                    <Input type="text" placeholder="First Name" />
                    <Input type="text" placeholder="Last Name" />
                    <Input type='tel' pattern='[\+]\d{2}[\(]\d{2}[\)]\d{4}[\-]\d{4}' placeholder="Phone" />
                    <Input type="email" placeholder="Email" />
                    <Input type="text" placeholder="Address" />
                    <Input type="number" placeholder="Zip Code" />
                    <Input type="password" placeholder="Password" />
                    <Input type="password" placeholder="Password" />
                </form>
            </div>
        );
    }
});

export default Register;