import React from 'react';
import './brandImage.less';

const BrandImage = React.createClass({
    render: function () {
        return (
            <img id="brand-image" src={require('../../images/string_on_finger_white_background.jpg')} />
        );
    }
});

export default BrandImage;