import React from 'react';
import { Link, withRouter } from 'react-router';

class SearchView extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div className="search-root">
        <div className="search-sidebar"></div>
      </div>
    );
  }
}

export default SearchView;