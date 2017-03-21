import {connect} from 'react-redux';
import {addBodyStyle, addMake} from '../../../actions/search_actions';
import SliderGroup from './slider_group';

const mapStateToProps = state => ({
  search: state.search
});

const mapDispatchToProps = (dispatch, ownProps) => {
  let chosenAction;
  let title = ownProps.title.toUpperCase();
  if(title.toUpperCase().includes("BODY")) {
    chosenAction = addBodyStyle;
  }
  return {
    action: limit => dispatch(chosenAction(limit)) // SearchApi.query().then(dispatch(receiveCars()))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(FilterDropdown);