import React, { Component } from 'react';
import Title from '../components/title/title.jsx';
import NavBar from '../components/navBar/navBar.jsx';
import '../main.less'


class App extends Component {
    render () {
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
};

export default App;