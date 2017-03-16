import React from 'react';
import MainNav from './shared/main_nav';

const App = ({ children }) => (
  <div>
    <MainNav></MainNav>
    { children }
  </div>
);

export default App;