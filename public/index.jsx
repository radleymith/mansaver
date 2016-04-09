import React from 'react';
import { render } from 'react-dom';
import ReactStormpath, { Router } from 'react-stormpath';
import createBrowserHistory from 'history/lib/createBrowserHistory';
import routes from './routes.jsx';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './reducers';

let store = createStore(reducers);

ReactStormpath.init();

render(
    <Provider store={store}>
        <Router routes={routes} history={createBrowserHistory()}/>
    </Provider>,
  document.getElementById('app')
)

