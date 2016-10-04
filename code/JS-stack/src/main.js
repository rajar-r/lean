import React from 'react';
import App from './components/App';
require('./main.scss');

import configureStore from './store/configureStore';
import { Provider } from 'react-redux'

var store = configureStore();

React.render(
    <Provider store={store}>
        <App/>
    </Provider>, document.getElementById('container'));
