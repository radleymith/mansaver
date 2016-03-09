import React from 'react';
import { Router, Route, browserHistory, IndexRoute } from 'react-router'
import App from './views/app.jsx';
import Home from './components/home/home.jsx';
import Expect from './components/expect/expect.jsx';




module.exports = (
    <Route path="/" component={App}>
        <IndexRoute component={Home} />
        <Route path="/expect" component={Expect} />
    </Route>
);