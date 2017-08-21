import React from 'react';
import {render} from 'react-dom';
import {hashHistory} from 'react-router'
import {Provider} from 'react-redux'
import RouteMap from "./router/routeMap";
import configureStore from './store/configureStore'
import registerServiceWorker from './registerServiceWorker';

const store = configureStore();
render(<Provider store={store}>
        <RouteMap history={hashHistory}/>
    </Provider>,
    document.getElementById('root'));
registerServiceWorker();
