import React from 'react';
import MainNavContainer from './shared/main_nav_container';

const App = ({ children }) => (
  <div>
    <MainNav></MainNav>
    { children }
  </div>
);

export default App;