import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { applyMiddleware, createStore, combineReducers } from 'redux'
import createLogger from 'redux-logger'
import { Router, Route, browserHistory } from 'react-router'
import { syncHistoryWithStore, routerReducer } from 'react-router-redux'

import App from './App'
import Drumkit from './drumkit/Drumkit'
import counterApp from './reducers'
import keys from './drumkit/reducers'
import './index.css'

const logger = createLogger()
let store = createStore(
  combineReducers({
    ...counterApp,
    keys,
    routing: routerReducer
  }), applyMiddleware(logger)
)

const history = syncHistoryWithStore(browserHistory, store)

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Route path='/' component={App} />
      <Route path='drumkit' component={Drumkit} />
      { /* </App> */ }
      { /* </Route> */ }
    </Router>
  </Provider>,
  document.getElementById('root')
)
