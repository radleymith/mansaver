// main.js
import React from 'react';
import TitleBar from '../components/titleBar/titleBar.jsx';
import SubHeader from '../components/subHeader/subHeader.jsx';
import BrandImage from '../components/brandImage/brandImage.jsx';
import Explanation from '../components/explanation/explanation.jsx';
import Expect from '../components/expect/expect.jsx';
import SubscribeButton from '../components/subscribeButton/subscribeButton.jsx';
import '../main.less'


var App = React.createClass({
    render: function () {
        return (
            <div id="whole">
                <TitleBar />
                <section id="intro" className="screen-section">
                    <SubHeader />
                    <BrandImage />
                    <Explanation />
                    <SubscribeButton />
                </section>
                <Expect />                
            </div>
        );
    }
});

export default App;