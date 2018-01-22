import 'materialize-css/dist/css/materialize.min.css';
import 'jquery/dist/cdn/jquery-2.1.1.js';
import 'materialize-css/dist/js/materialize.min';
import createHistory from 'history/createBrowserHistory';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import configureStore from './store';

const history = createHistory();
const store = configureStore({}, history);

ReactDOM.render(
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <App />
        </ConnectedRouter>
    </Provider>,
    document.getElementById('root')
);
registerServiceWorker();
