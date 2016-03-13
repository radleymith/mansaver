import React from 'react';
import { render } from 'react-dom';
import ReactStormpath, { Router } from 'react-stormpath';
import createBrowserHistory from 'history/lib/createBrowserHistory';
import routes from './routes.jsx';

ReactStormpath.init();

render(
  <Router routes={routes} history={createBrowserHistory()}/>,
  document.getElementById('app')
)

