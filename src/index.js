import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'mobx-react';
import {Router, BrowserRouter} from 'react-router-dom'
import history from './configs/history';

import registerServiceWorker from './registerServiceWorker';
import Routes from './configs/routes';
import stores from './stores/index';

import './index.css';
import './styles/buttons.css';


ReactDOM.render(
    <Provider user={stores.user} organization={stores.organization}>
        <Router history={history}>
            <Routes />
        </Router>   
    </Provider>,
    document.getElementById('root')
);

registerServiceWorker();
