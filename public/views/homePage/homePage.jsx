import React, { Component } from 'react';
import SubHeader from '../../components/subHeader/subHeader.jsx';
import BrandImage from '../../components/brandImage/brandImage.jsx';
import Explanation from '../../components/explanation/explanation.jsx';
import SubscribeButton from '../../components/subscribeButton/subscribeButton.jsx';

class Home extends Component {
    render () {
        return (
            <section id="intro" className="screen-section">
                <SubHeader />
                <BrandImage />
                <Explanation />
                <SubscribeButton />
            </section>
        );
    }
};

export default Home;

