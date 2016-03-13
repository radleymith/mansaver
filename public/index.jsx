import React from 'react';
import { render } from 'react-dom';
import ReactStormpath, { Router } from 'react-stormpath';
import { browserHistory } from 'react-router';
import routes from './routes.jsx';

ReactStormpath.init();

render(
  <Router routes={routes} history={browserHistory}/>,
  document.getElementById('app')
)

