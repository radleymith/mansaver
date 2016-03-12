import React from 'react';
import SubscribeHeader from '../../components/subscribeHeader/subscribeHeader.jsx';
import { Input } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

const SubscribeLevel = React.createClass({
    render: function () {
        return (
            <div>
                <SubscribeHeader />
                <form method="POST">
                    <Input type="radio" label="card (10.95 per reminder)" name="level" value="10.95" />
                    <Input type="radio" label="card + gift (50 per reminder)" name="level" value="50" />
                    <Input type="radio" label="card + large gift (120 per reminder)" name="level" value="120" />
                    <Input type="radio" label="you specify (must be more than $150.00)" name="level" value="tbd" />
                </form>
                <LinkContainer to="/subscribe/level">
                    <Button bsStyle="primary" bsSize="large">Continue</Button>
                </LinkContainer>
            </div>
        );
    }
});

export default SubscribeLevel;