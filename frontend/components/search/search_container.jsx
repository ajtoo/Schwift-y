import {connect} from 'react-redux';
import SearchView from './search';
import {getAllCars} from '../../actions/search_actions';

const mapStateToProps = state => ({
  search: state.search
});

const mapDispatchToProps = dispatch => ({
  getAllCars: () => dispatch(getAllCars())
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchView);