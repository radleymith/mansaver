import React, { Component } from 'react';

const text = "When signing up for a subscription with us we know that you already have someone in mind for the gifts you'll be receiving.  You should expect to fill out a small questionarre to give some general information about the recipient of the present so that our expert shoppers can get an accurate gift.  After that you can expect a gift to show up a week before you need it!";

class Expect extends Component {
    render () {
        return (
            <section id="whatToExpect" className="screen-section">
                <div id="expect-question">
                    What to Expect
                </div>
                <div id="expect-text">
                    {text}
                </div>
                <div className="breaker">
                    <span>
                        *
                    </span>
                    <span>
                        *
                    </span>
                    <span>
                        *
                    </span>
                </div>
            </section>
        );
    }
};

export default Expect;
