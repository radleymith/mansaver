import React from 'react';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import App from './views/app.jsx';
import Home from './components/home/home.jsx';
import Expect from './components/expect/expect.jsx';
import Login from './components/login/login.jsx';
import Register from './components/register/register.jsx';




module.exports = (
    <Route path="/" component={App}>
        <IndexRoute component={Home} />
        <Route path="/expect" component={Expect} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
    </Route>
);