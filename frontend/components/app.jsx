import React from 'react';
import MainNavContainer from './shared/main_nav_container';

const App = ({ children }) => (
  <div>
    <MainNavContainer></MainNavContainer>
    { children }
  </div>
);

export default App;