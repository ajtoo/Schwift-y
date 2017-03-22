import React from 'react';
import { Link, withRouter } from 'react-router';
import SearchBar from './search_bar';
import SearchFilters from './search_filters';
import CarCard from './car_card';

class SearchView extends React.Component {
  constructor(props) {
    super(props);
    this.doSearch = this.doSearch.bind(this);
  }

  componentDidMount() {
    this.props.getAllCars();
  }
  
  doSearch() {
    let searchState = this.props.search;
    delete searchState.foundCars;
    return(
      this.props.runSearch(searchState, window.location.hash.slice(7).replace("-", " "))
    );
  }
  render() {
    let results = this.props.search.foundCars || [];
    let carList = [];
    for(let i = 0; i < results.length; ++i) {
      carList.push(<CarCard key={i} car={results[i]}/>);
  }

    return(
      <div className="search-root">
        <aside className="search-sidebar">
          <SearchFilters cars={this.props.search.foundCars} search={this.doSearch} clearFilters={this.props.clearFilters}/>
        </aside>
        <main  className="search-view">
          <SearchBar/>
          <div className="results">
            <section className="result-view">
              {carList}
            </section>
          </div>
        </main>
      </div>
    );
  }
}

export default SearchView;