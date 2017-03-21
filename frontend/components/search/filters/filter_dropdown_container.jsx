import {connect} from 'react-redux';
import {
  addBodyStyle, 
  addMake,
  addTransmission,
  addDrivetrain
} from '../../../actions/search_actions';
import FilterDropdown from './filter_dropdown';

const mapStateToProps = state => ({
  search: state.search
});

const mapDispatchToProps = (dispatch, ownProps) => {
  let chosenAction;
  let title = ownProps.title.toUpperCase();
  if(title.toUpperCase().includes("BODY")) {
    chosenAction = addBodyStyle;
  } else if(title.toUpperCase().includes("MAKE")) {
    chosenAction = addMake;
  } else if(title.toUpperCase().includes("TRANSMISSION")) {
    chosenAction = addTransmission;
  } else if(title.toUpperCase().includes("DRIVETRAIN")) {
    chosenAction = addDrivetrain;
  }
  return {
    action: limit => dispatch(chosenAction(limit)) // SearchApi.query().then(dispatch(receiveCars()))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(FilterDropdown);