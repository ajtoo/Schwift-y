import React from 'react';
import { Link, withRouter } from 'react-router';

class SearchView extends React.Component {
  constructor(props) {
    super(props);
  }

  //TODO: search-bar becomes it's own Component
  //TODO: side-bar form for filtering
  //TODO: table for veiwing car cards
    //TODO: make car cards
  render() {
    return(
      <div className="search-root">
        <aside className="search-sidebar">sidebar is here</aside>
        <main  className="search-view">
          <header className="search-bar">
            <i className="material-icons">search</i>
            <input className="search-input" placeholder="Search for a make, model, or body style"/>
            <div className="order-selection">
              <span>
                Mileage
              </span>
              <img className="dropdown-arrow" src="https://res.cloudinary.com/ajtoo/image/upload/v1489615610/schwifty_down_arrow_ivfbhj.png"/>
            </div>
          </header>
          <table className="result-view"></table>
        </main>
      </div>
    );
  }
}

export default SearchView;