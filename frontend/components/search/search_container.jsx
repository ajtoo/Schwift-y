import {connect} from 'react-redux';
import SearchView from './search';
import {getAllCars, clearFilters, search} from '../../actions/search_actions';

const mapStateToProps = state => ({
  search: state.search,
  session: state.session
});

const mapDispatchToProps = dispatch => ({
  getAllCars: () => dispatch(getAllCars()),
  clearFilters: () => dispatch(clearFilters()),
  runSearch: (state, location) => dispatch(search(state, location))
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchView);