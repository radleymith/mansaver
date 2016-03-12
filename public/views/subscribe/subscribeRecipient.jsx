import React from 'react';
import SubscribeHeader from '../../components/subscribeHeader/subscribeHeader.jsx';
import { Input, Button } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

const SubscribeRecipient = React.createClass({
    render: function () {
        return (
            <div>
                <SubscribeHeader />
                <div>
                    Tell us a little about the recipient.
                </div>
                <hr />
                <form method="POST">
                    <ul className="unstyled">
                        <li>
                            <Input type="text" placeholder="First Name" />
                        </li>
                        <li>
                            <Input type="text" placeholder="Last Name" />
                        </li>
                        <li>
                            <label>
                                Gender
                            </label>
                            <Input type="radio" name="gender" label="Female" value="F" />
                            <Input type="radio" name="gender" label="Male" value="M" />
                        </li>
                        <li>
                            <Input type="select" placeholder="Shirt size" name="shirt-size">
                                <option value="XS">XS</option>
                                <option value="S">S</option>
                                <option value="M">M</option>
                                <option value="L">L</option>
                                <option value="XL">XL</option>
                                <option value="XXL">XXL</option>
                            </Input>
                        </li>
                        <li>
                            <Input type="select" placeholder="Pant Size" name="pant-size">
                                <option value="XS">XS</option>
                                <option value="S">S</option>
                                <option value="M">M</option>
                                <option value="L">L</option>
                                <option value="XL">XL</option>
                                <option value="XXL">XXL</option>
                            </Input>
                        </li>
                        <li>
                            <Input type="textarea" name="comments" label="Comments:" placeholder="Comments:" />
                        </li>
                    </ul>
                </form>
                <LinkContainer to="/subscribe/level">
                    <Button type="submit" bsStyle="primary" bsSize="large">Submit</Button>
                </LinkContainer>
            </div>
        );
    }
});

export default SubscribeRecipient;