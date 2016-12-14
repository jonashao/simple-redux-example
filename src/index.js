import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { ReduxRouter } from 'redux-router'
import { Router, Route, browserHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'

import configureStore from "./configureStore";

import App from './containers/App';
import DevTools from './containers/DevTools';

const store = configureStore();
const history = syncHistoryWithStore(browserHistory, store)

ReactDOM.render(
  <Provider store={ store }>
    <div>
      <Router history={ history }>
        <Route path="/" component={ App }>
        </Route>
      </Router>
      <DevTools/>
    </div>
  </Provider>,
  document.getElementById('root')
);

