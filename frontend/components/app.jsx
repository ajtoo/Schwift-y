import React from 'react';
import MainNav from './shared/main_nav';

const App = ({ children }) => (
  <div>
    <MainNav></MainNav>
    <h1>SCHWIFTYYY!!!</h1>
    <button className="btn btn-primary">Is Bootstrap?</button>
    { children }
  </div>
);

export default App;