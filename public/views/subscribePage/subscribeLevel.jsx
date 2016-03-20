import React, { Component } from 'react';
import SubscribeHeader from '../../components/subscribeHeader/subscribeHeader.jsx';
import { Input, Button } from 'react-bootstrap';
import { Link } from 'react-router';

class SubscribeLevel extends Component {
    render () {
        return (
            <div>
                <SubscribeHeader />

                    <Input type="radio" label="card (10.95 per reminder)" name="level" value="10.95" />
                    <Input type="radio" label="card + gift (50 per reminder)" name="level" value="50" />
                    <Input type="radio" label="card + large gift (120 per reminder)" name="level" value="120" />
                    <Input type="radio" label="you specify (must be more than $150.00)" name="level" value="tbd" />

                <Link to="/subscribe/recipient">
                    <Button bsStyle="primary" bsSize="large">Continue</Button>
                </Link>
                {this.props.children}
            </div>
        );
    }
};

export default SubscribeLevel;