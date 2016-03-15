import React from 'react';
import { Route, IndexRoute } from 'react-router';
import { LoginRoute, HomeRoute, LogoutRoute, AuthenticatedRoute } from 'react-stormpath';
import App from './views/app.jsx';
import Home from './components/home/home.jsx';
import Expect from './components/expect/expect.jsx';
import Login from './components/login/login.jsx';
import Register from './components/register/register.jsx';
import SubscribeDays from './views/subscribe/subscribeDays.jsx';
import SubscribeLevel from './views/subscribe/subscribeLevel.jsx';
import SubscribeRecipient from './views/subscribe/subscribeRecipient.jsx';
import Profile from './views/profilePage/profilePage.jsx';





module.exports = (
    <Route path="/" component={App}>
        <IndexRoute component={Home} />
        <HomeRoute path="/" component={Home} />
        <Route path="/expect" component={Expect} />
        <LoginRoute path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/subscribe" component={SubscribeDays}>
            <Route path="level" component={SubscribeLevel} />
            <Route path="recipient" component={SubscribeRecipient} />
        </Route>
        <AuthenticatedRoute>
            <HomeRoute path='/me' component={Profile} />
        </AuthenticatedRoute>
        <LogoutRoute path="/logout" />
    </Route>
);