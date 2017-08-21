import React from 'react';
import ReactDOM from 'react-dom';
import {hashHistory} from 'react-router'
import {Provider} from 'react-redux'
import RouteMap from "./router/routeMap";
import configureStore from './store/configureStore'
import registerServiceWorker from './registerServiceWorker';
import './static/css/common.less'
import './static/css/font.css'


const store = configureStore();
ReactDOM.render(<Provider store={store}>
        <RouteMap history={hashHistory}/>
    </Provider>,
    document.getElementById('root'));
registerServiceWorker();
