import React from 'react';
import { Link, withRouter } from 'react-router';
import SearchBar from './search_bar';
import SearchFilters from './search_filters';

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
        <aside className="search-sidebar">
          <SearchFilters/>
        </aside>
        <main  className="search-view">
          <SearchBar/>
          <table className="result-view"></table>
        </main>
      </div>
    );
  }
}

export default SearchView;