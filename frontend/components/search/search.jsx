import React from 'react';
import { Link, withRouter } from 'react-router';
import SearchBar from './search_bar';
import SearchFilters from './search_filters';
import CarCard from './car_card';

class SearchView extends React.Component {
  constructor(props) {
    super(props);
  }

  //TODO: search-bar becomes it's own Component
  //TODO: side-bar form for filtering
  //TODO: table for veiwing car cards
    //TODO: make car cards
  render() {
    let results = [];
    for(let i = 0; i < 8; ++i) {
      results.push(<CarCard/>);
    }

    return(
      <div className="search-root">
        <aside className="search-sidebar">
          <SearchFilters/>
        </aside>
        <main  className="search-view">
          <SearchBar/>
          <div className="results">
            <section className="result-view">
              {results}
            </section>
          </div>
        </main>
      </div>
    );
  }
}

export default SearchView;