import React from 'react';
import { Route, IndexRoute } from 'react-router';
import { LoginRoute, HomeRoute, LogoutRoute, AuthenticatedRoute } from 'react-stormpath';
import App from './views/app.jsx';
import Home from './views/homePage/homePage.jsx';
import Expect from './views/expectPage/expectPage.jsx';
import Login from './views/loginPage/loginPage.jsx';
import Register from './views/registerPage/registerPage.jsx';
import SubscribeDays from './views/subscribePage/subscribeDays.jsx';
import SubscribeLevel from './views/subscribePage/subscribeLevel.jsx';
import SubscribeRecipient from './views/subscribePage/subscribeRecipient.jsx';
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