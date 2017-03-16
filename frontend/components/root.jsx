import React from 'react';
import {Provider} from 'react-redux';
import {Router, Route, Redirect, IndexRoute, IndexRedirect, hashHistory} from 'react-router';
import App from './app';
import SessionFormContainer from './session_form/session_form_container';
import {logout} from '../actions/session_actions';
// import * as SessionApi from '../util/session_api_util';

const Root = ({store}) => (
  <Provider store={store}>
    <Router history={hashHistory}>
      <Route path="/" component={App}>
        <IndexRedirect to="/cars"/>
        <Route path="cars">
          <Route path="San-Francisco"/>
          <Route path="Los-Angeles"/>
          <Route path="Orange-County"/>
          <Route path="Sacramento"/>
          <Route path="San-Diego"/>
          <Route path="Washington-DC"/>
        </Route>
        <Route path="login" component={SessionFormContainer}/>
        <Route path="logout" onEnter={() => logout()(store.dispatch).then(() => hashHistory.push('/cars')) }/>
      </Route>
    </Router>
  </Provider>
);

export default Root;