// main.js
let React = require('react');
let ReactDOM = require('react-dom');
import './css/frontPage.less';
import { Button } from 'react-bootstrap'

let HeaderBanner = React.createClass({
        render: function () {
            return (
                <h1 id="header-banner" className="header-text front-page-text">GiftMinder</h1>
            );
        }
    }),

    SubHeader = React.createClass({
        render: function () {
            return (
                <h4 id="sub-header" className="sub-header-text front-page-text">Never forget to have a great present for someone you care about, at important times.</h4>
            );
        }
    }),

    Header = React.createClass({
        render: function () {
            return (
                <section>
                    <HeaderBanner />
                    <SubHeader />
                </section>
            );
        }
    }),

    Explanation = React.createClass({
        render: function () {
            return (
                <div className="front-page-text">
                    We know that you are busy.  We also know that you are human, and humans forget things.  
                    We at GiftMinder are here to help make sure you at least do not forget to have a gift,
                    when you need one.  Simply <link href="#">subscribe</link> to our service, and we will provide 
                    you with a gift a week ahead of when you think you will need one.
                </div>
            );
        }
    }),

    SubscribeButton = React.createClass({
        render: function () {
            return (
                <div className="well subscribe-well">
                    <Button id="subscribe-button" bsStyle="success" bsSize="large" block>
                        Subscribe to always have a gift!
                    </Button>
                </div>
            );
        }
    });

ReactDOM.render(
    <Header />,
    document.getElementById('header')
);

ReactDOM.render(
    <div>
        <Explanation />
        <SubscribeButton />
    </div>,
    document.getElementById('content')
);