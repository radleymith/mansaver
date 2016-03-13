import React from 'react';
import SubscribeHeader from '../../components/subscribeHeader/subscribeHeader.jsx';
import { Input, Button } from 'react-bootstrap';
// import { LinkContainer } from 'react-router-bootstrap';

const SubscribeDays = React.createClass({
    render: function () {
        return (
            <div>
                <SubscribeHeader />
                <form method="POST">
                    <Input type="checkbox" label="Christmas" name="christmas" value="12/25" />
                    <Input type="checkbox" label="Channukah" name="channukah" value="12/24" />
                    <Input type="checkbox" label="Valentines Day" name="valentines_day" value="2/14" />
                    <Input type="checkbox" label="Birthday" name="birthday" value="" />
                    <Input type="checkbox" label="Other" name="other1" value="" />
                </form>

                
            </div>
        );
    }
});

export default SubscribeDays;

// <LinkContainer to={{ pathname: '/subscribe/level' }}>
                //     <Button bsStyle="primary" bsSize="large">Continue</Button>
                // </LinkContainer>