import React from 'react';
import { render } from 'react-dom';
import ReactStormpath, { Router } from 'react-stormpath';
import { browserHistory } from 'react-router';
import routes from './routes.jsx';
import { Provider } from 'react-redux';
import store from './store';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

injectTapEventPlugin();
ReactStormpath.init();

render(
    <MuiThemeProvider>
        <Provider store={store}>
            <Router routes={routes} history={browserHistory} />
        </Provider>
    </MuiThemeProvider>,
  document.getElementById('app')
)

