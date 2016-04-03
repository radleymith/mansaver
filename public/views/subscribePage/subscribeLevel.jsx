import React, { Component } from 'react';
import SubscribeHeader from '../../components/subscribeHeader/subscribeHeader.jsx';
import { Input, Button } from 'react-bootstrap';
import { Link } from 'react-router';

class SubscribeLevel extends Component {
    saveValues (e) {
        console.log(e.target.value);
    }
    render () {
        return (
            <div>
                <SubscribeHeader />

                    <Input type="radio" label="card (10.95 per reminder)" name="level" value="10.95" onChange={this.saveValues} />
                    <Input type="radio" label="card + gift (50 per reminder)" name="level" value="75" onChange={this.saveValues} />
                    <Input type="radio" label="card + large gift (120 per reminder)" name="level" value="150" onChange={this.saveValues} />

                <Link to="/subscribe/recipient">
                    <Button bsStyle="primary" bsSize="large">Continue</Button>
                </Link>
            </div>
        );
    }
};

export default SubscribeLevel;