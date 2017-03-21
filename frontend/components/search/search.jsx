import React from 'react';
import { Link, withRouter } from 'react-router';
import SearchBar from './search_bar';
import SearchFilters from './search_filters';
import CarCard from './car_card';

class SearchView extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.getAllCars();
  }

  render() {
    //TODO: dynamically pull search results
    let results = this.props.search.foundCars;
    let carList = [];
    console.log(results);
    for(let i = 0; i < results.length; ++i) {
      carList.push(<CarCard key={i} car={results[i]}/>);
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
              {carList}
            </section>
          </div>
        </main>
      </div>
    );
  }
}

export default SearchView;