import React, { Component } from 'react';
import SubscribeHeader from '../../components/subscribeHeader/subscribeHeader.jsx';
import { Input, Button } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

class SubscribeRecipient extends Component {
    saveValues (e) {
        console.log(e.target.value);
    }
    render () {
        return (
            <div>
                <SubscribeHeader />
                <div>
                    Tell us a little about the recipient.
                </div>
                <hr />
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
                            <Input type="radio" name="gender" label="Female" value="F" onChange={saveValues} />
                            <Input type="radio" name="gender" label="Male" value="M" onChange={saveValues} />
                        </li>
                        <li>
                            <Input type="select" placeholder="Shirt size" name="shirt-size" onChange={saveValues}>
                                <option value="XS">XS</option>
                                <option value="S">S</option>
                                <option value="M">M</option>
                                <option value="L">L</option>
                                <option value="XL">XL</option>
                                <option value="XXL">XXL</option>
                            </Input>
                        </li>
                        <li>
                            <Input type="select" placeholder="Pant Size" name="pant-size" onChange={saveValues}>
                                <option value="XS">XS</option>
                                <option value="S">S</option>
                                <option value="M">M</option>
                                <option value="L">L</option>
                                <option value="XL">XL</option>
                                <option value="XXL">XXL</option>
                            </Input>
                        </li>
                        <li>
                            <Input type="textarea" name="comments" label="Comments:" placeholder="Comments:" onChange={saveValues} />
                        </li>
                    </ul>                
                    <Button type="submit" bsStyle="primary" bsSize="large">Submit</Button>
                
            </div>
        );
    }
};

export default SubscribeRecipient;