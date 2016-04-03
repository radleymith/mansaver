import React, { Component } from 'react';
import SubscribeHeader from '../../components/subscribeHeader/subscribeHeader.jsx';
import { Input, Button } from 'react-bootstrap';
import { Link } from 'react-router';


class SubscribeDays extends Component {
    render () {
        return (
            <div>
                <SubscribeHeader />
                    <Input type="checkbox" label="Christmas" name="christmas" value="12/25" onChange={this.props.saveValues} />
                    <Input type="checkbox" label="Channukah" name="channukah" value="12/24" onChange={this.props.saveValues} />
                    <Input type="checkbox" label="Valentines Day" name="valentines_day" value="2/14" onChange={this.props.saveValues} />
                    <Input type="checkbox" label="Birthday" name="birthday" value="" onChange={this.props.saveValues} />
                    <Input type="checkbox" label="Other" name="other1" value="" onChange={this.props.saveValues} />
                    <Link to="/subscribe/level">
                        <Button bsStyle="primary" bsSize="large">Continue</Button>
                    </Link>
            </div>
        );
    }
};

export default SubscribeDays;

