import React from 'react';
import {Provider} from 'react-redux';
import {Router, Route, IndexRoute, hashHistory} from 'react-router';
import App from './app';

const Root = ({store}) => (
  <Provider store={store}>
    <Router history={hashHistory}>
      <Route path="/" component={App}>
        <Route path="/San-Francisco">
        </Route>
        <Route path="/Los-Angeles">
        </Route>
        <Route path="/Orange-County">
        </Route>
        <Route path="/Sacramento">
        </Route>
        <Route path="/San-Diego">
        </Route>
        <Route path="/Washington-DC">
        </Route>
      </Route>
    </Router>
  </Provider>
);

export default Root;