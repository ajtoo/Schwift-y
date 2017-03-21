import {connect} from 'react-redux';
import {addMileLimit, addPriceLimit} from '../../../actions/search_actions';
import SliderGroup from './slider_group';

const mapStateToProps = state => ({
  search: state.search
});

const mapDispatchToProps = (dispatch, ownProps) => {
  let chosenAction;
  let label = ownProps.label.toUpperCase();
  if(label.includes("MAX MILEAGE")) {
    chosenAction = addMileLimit;
  } else if(label.includes("MAX PRICE")) {
    chosenAction = addPriceLimit;
  }
  return {
    action: limit => dispatch(chosenAction(limit)) // SearchApi.query().then(dispatch(receiveCars()))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SliderGroup);