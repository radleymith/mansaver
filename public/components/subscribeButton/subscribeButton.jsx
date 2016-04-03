import React from 'react';
import { Button } from 'react-bootstrap';
import './subscribeButton.less';

const SubscribeButton = () => {
    return (
        <div className="well subscribe-well">
            <Button id="subscribe-button" bsStyle="primary" bsSize="large" block>
                Subscribe to always have a gift!
            </Button>
        </div>
    );
};

export default SubscribeButton;