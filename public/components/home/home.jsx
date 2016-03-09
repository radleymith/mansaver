import React from 'react';
import SubHeader from '../subHeader/subHeader.jsx';
import BrandImage from '../brandImage/brandImage.jsx';
import Explanation from '../explanation/explanation.jsx';
import SubscribeButton from '../subscribeButton/subscribeButton.jsx';

const Home = React.createClass({
    render: function () {
        return (
            <section id="intro" className="screen-section">
                <SubHeader />
                <BrandImage />
                <Explanation />
                <SubscribeButton />
            </section>
        );
    }
});

export default Home;

   // <Expect />                
   //          </div>