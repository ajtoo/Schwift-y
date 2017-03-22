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

  componentWillReceiveProps(nextProps) {
    //TODO: refactor even more so that store links directly to the slider
    let label = nextProps.label.toUpperCase();
    if(label.includes("MAX MILEAGE")) {
      let newMiles = nextProps.search.maxMiles/1000 > 81 ? 81 : nextProps.search.maxMiles/1000
      this.setState({value: newMiles});
    } else if(label.includes("MAX PRICE")) {
      let newPrice = nextProps.search.maxPrice/1000 > 81 ? 81 : nextProps.search.maxPrice/1000
      this.setState({value: newPrice});
    }
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