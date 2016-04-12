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
        var childrenWithProps = React.Children.map(this.props.children, (child) => React.cloneElement(child, {saveValues: this.saveValues}));

        return ( 
            <form method="POST" action="/api/subscribe">
                {childrenWithProps}
            </form>
        );
    }    
};

export default SubscribeCombine;