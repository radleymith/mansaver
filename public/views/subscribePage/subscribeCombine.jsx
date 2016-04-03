import React, { Component } from 'react';

class SubscribeCombine extends Component {
    constructor () {
        super();
        this.saveValues = this.saveValues.bind(this);
    }
    saveValues (e) {
        console.log('we hitting the parent: ' + e.target.value);
    }
    render () {
        return ( 
            <form action="POST" target="">
                {this.props.children}
            </form>
        );
    }
    
};

export default SubscribeCombine;