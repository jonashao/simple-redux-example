import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App';
import {Provider} from 'react-redux'

import configureStore from "./configureStore";

import DevTools from './containers/DevTools';

const store = configureStore();

ReactDOM.render(
    <Provider store={store}>
        <div>
            <App />
            <DevTools/>
        </div>
    </Provider>,
    document.getElementById('root')
);

