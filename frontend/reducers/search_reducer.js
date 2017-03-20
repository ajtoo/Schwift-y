import {RECEIVE_SEARCH_TAG} from '../actions/search_actions';
import merge from 'lodash/merge';

const _nullSearch = Object.freeze({
  tags: [],
  foundCars: []
});

const SearchReducer = (state = {}, action) => {
  let newState = Object.freeze(state);
  switch(action.type) {
    case RECEIVE_SEARCH_TAG:
      newState = merge({}, _nullSearch, {tags: [action.tag]});
      return newState;
    default:
    return newState;
  }
}

export default SearchReducer;