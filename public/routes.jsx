import React from 'react';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import App from './views/app.jsx';
import Home from './components/home/home.jsx';
import Expect from './components/expect/expect.jsx';
import Login from './components/login/login.jsx';
import Register from './components/register/register.jsx';
import SubscribeDays from './views/subscribe/subscribeDays.jsx';
import SubscribeLevel from './views/subscribe/subscribeLevel.jsx';
import SubscribeRecipient from './views/subscribe/subscribeRecipient.jsx';




module.exports = (
    <Route path="/" component={App}>
        <IndexRoute component={Home} />
        <Route path="/expect" component={Expect} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/subscribe" component={SubscribeDays}>
            <Route path="level" component={SubscribeLevel} />
            <Route path="recipient" component={SubscribeRecipient} />
        </Route>
    </Route>
);