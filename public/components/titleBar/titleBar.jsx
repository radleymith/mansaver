import React from 'react';
import Title from '../title/title.jsx';
import NavBar from '../navBar/navBar.jsx';

const TitleBar = React.createClass({
    render: function () {
        return (
            <nav id="title-bar" className="navbar navbar-default">
                <Title />
                <NavBar />
            </nav>
        );
    }
});

export default TitleBar;