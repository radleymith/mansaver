import React from 'react';
import SubscribeHeader from '../../components/subscribeHeader/subscribeHeader.jsx';

const SubscribeRecipient = React.createClass({
    render: function () {
        return (
            <div>
                <SubscribeHeader />
                <form method="POST">
                    <ul className="unstyled">
                        <li>
                            <input type="text" placeholder="First Name" />
                        </li>
                        <li>
                            <input type="text" placeholder="Last Name" />
                        </li>
                        <li>
                            <label>
                                Gender
                            </label>
                            <input type="radio" name="gender" label="Female" value="F" />
                            <input type="radio" name="gender" label="Male" value="M" />
                            


        );
    }
});