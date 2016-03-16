import React, { Component } from 'react';
import { Input } from 'react-bootstrap';
import { RegistrationForm } from 'react-stormpath';

class Register extends Component {
    render () {
        return (
            <div>
                <h2 id="register-header" className="">
                    Register
                </h2>
                <RegistrationForm redirectTo="/login" />
            </div>
        );
    }
};

export default Register;
