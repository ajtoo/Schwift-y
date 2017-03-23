import React from 'react';
import {Provider} from 'react-redux';
import {Router, Route, Redirect, IndexRoute, IndexRedirect, hashHistory} from 'react-router';
import App from './app';
import SessionFormContainer from './session_form/session_form_container';
import SearchViewContainer from './search/search_container';
import CarDetailContainer from './detail/car_detail_container';
import TestDrives from './test_drives/test_drives';
import {logout} from '../actions/session_actions';
import {getCar} from '../actions/car_actions';

const Root = ({store}) => (
  <Provider store={store}>
    <Router history={hashHistory}>
      <Route path="/" component={App}>
        <IndexRedirect to="/cars"/>
        <Route path="cars" component={SearchViewContainer}>
          <Route path="San-Francisco"/>
          <Route path="Los-Angeles"/>
          <Route path="Orange-County"/>
          <Route path="Sacramento"/>
          <Route path="San-Diego"/>
          <Route path="Washington-DC"/>
        </Route>
        <Route path="car/:id" component={CarDetailContainer} onEnter={() => getCar(Number(window.location.hash.slice(6)))(store.dispatch)}/>
        <Route path="login" component={SessionFormContainer}/>
        <Route path="logout" onEnter={() => logout()(store.dispatch).then(() => hashHistory.push('/cars')) }/>
        <Route path="test-drives" component={TestDrives}/>
      </Route>
    </Router>
  </Provider>
);

export default Root;