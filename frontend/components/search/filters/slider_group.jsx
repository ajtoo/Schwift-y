import React from 'react';

class SliderGroup extends React.Component {
  /*
    NOTE: the max in props is the actual max, 
    there is a +1 to the slider's max as a "greater than"
    indicator (so you can search cars above the "max" of the slider)
    which allows you to uncap your search in terms of price
  */
  constructor(props) {
    super(props);
    this.state = {
      value: 81
    };
    this.updateValue = this.updateValue.bind(this);
  }
  updateValue(e) {
    let value = e.target.value;
    if(e.target.value < this.props.max) {
      this.props.action(value);
    }
    this.setState({value: value});
  }
  render(){
    return(
      <fieldset className="slider-group">
        <label className="slider-label">{this.props.label}</label>
        <label className="value-label">
          {this.props.unit}{this.state.value > this.props.max ? 80 : this.state.value}k{this.state.value > this.props.max ? "+" : ""}
        </label>
        <input className="slider-group-range"
                type="range" 
                min="5" 
                max={Number(this.props.max)+1} 
                step="1" 
                onChange={this.updateValue.bind(this)} 
                value={this.state.value}/>
      </fieldset>
    );
  }
}

export default SliderGroup;