// main.js
import React from 'react';
import Title from '../components/title/title.jsx';
import NavBar from '../components/navBar/navBar.jsx';
import '../main.less'


var App = React.createClass({
    render: function () {
        return (
            <div>
                <nav id="title-bar" className="navbar navbar-default">
                    <Title />
                    <NavBar />
                </nav>
                {this.props.children}
            </div>
        );
    }
});

export default App;