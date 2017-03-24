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
    if(window.location.hash.slice(7)) {
      let searchState = this.props.search;
      this.props.runSearch(searchState, window.location.hash.slice(7).replace("-", " "))
    } else {
      this.props.getAllCars();
    }
  }

    componentWillReceiveProps(nextProps) {
    if(this.props.location.pathname !== nextProps.location.pathname) {
    if(window.location.hash.slice(7)) {
      let searchState = this.props.search;
      this.props.runSearch(searchState, window.location.hash.slice(7).replace("-", " "))
    } else {
      this.props.getAllCars();
    }
    }
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

    let uid = 0;     //the db uses 1s indexing, not 0s
    if(this.props.session.currentUser)
      uid = this.props.session.currentUser.id;

    for(let i = 0; i < results.length; ++i) {
      carList.push(<CarCard key={i} car={results[i]} uid={uid}/>);
    }

    return(
      <div className="search-root">
        <aside className="search-sidebar">
          <SearchFilters cars={this.props.search.foundCars} search={this.doSearch} clearFilters={this.props.clearFilters}/>
        </aside>
        <main  className="search-view">
          {/*<SearchBar/>*/}
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