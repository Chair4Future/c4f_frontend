import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'mobx-react';

import registerServiceWorker from './registerServiceWorker';
import Routes from './configs/routes';
import stores from './stores/index';

import './index.css';


ReactDOM.render(
    <Provider user={stores.user}>
        <BrowserRouter>
            <Routes />
        </BrowserRouter>
    </Provider>,
    document.getElementById('root')
);

registerServiceWorker();
