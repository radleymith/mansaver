import React, { Component } from 'react';

class SubscribeCombine extends Component {
    // var fields = {}
    // saveFields (newFields) {
    //     fields = Object.assign({}, fields, newFields);
    // }
    // constructor () {
    //     super();
    //     this._saveValues = this._saveValues.bind(this);
    // },
    render () {
        return ( 
            <form action="POST" target="">
                {this.props.children}
            </form>
        );
    }
    // _saveValues (target) {

    // }
};

export default SubscribeCombine;