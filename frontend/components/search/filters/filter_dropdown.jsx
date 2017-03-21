import React from 'react';

class FilterDropdown extends React.Component{
  constructor(props) {
    super(props);
    this.showOptions = this.showOptions.bind(this);
    this.addFilter = this.addFilter.bind(this);
  } 

  showOptions(e) {
    console.log(`${this.props.title.replace(" ", "-")}`);
    let dropdown = document.querySelector(`#${this.props.title.replace(" ", "-")}`);

    //give make dropdown visible & apply height to bump other items down
    if(dropdown.style.height !== "auto") {
      dropdown.style.height = "auto";
      dropdown.style.display = "block";
    } else {
      dropdown.style.height = 0;
      dropdown.style.display = "none";
      console.log(dropdown.style.height);
    }
  }

  addFilter(e) {
    this.props.action(e.target.value)
  }

  render() {
    let options = this.props.options.map((option, i) => (
      <li onClick={this.addFilter} className="filters-dropdown-option" key={i}>{option}</li>
    ));
    return(
      <fieldset className="filters-dropdown">
        <label onClick={this.showOptions} className="filter-label">{this.props.title}</label>
        <ul className="filters-dropdown-list" id={this.props.title.replace(" ", "-")}>
          {options}
        </ul>
      </fieldset>
    );
  }
}

export default FilterDropdown;