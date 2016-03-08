import React from 'react';
import Router from 'react-router';
import App from './views/app.jsx'

var DefaultRoute = Router.DefaultRoute,
    Route = Router.Route;

var routes = (
        <Route path="/" component={App}
    )