import React from 'react';

class FilterDropdown extends React.Component{
  constructor(props) {
    super(props);
    this.showOptions = this.showOptions.bind(this);
    this.addFilter = this.addFilter.bind(this);
    this.searchHasTag = this.searchHasTag.bind(this);
  } 

  showOptions(e) {
    let dropdown = document.querySelector(`#${this.props.title.replace(" ", "-")}`);

    //give make dropdown visible & apply height to bump other items down
    if(dropdown.style.height !== "auto") {
      dropdown.style.height = "auto";
      dropdown.style.display = "block";
    } else {
      dropdown.style.height = 0;
      dropdown.style.display = "none";
    }
  }

  addFilter(e) {
    //TODO: add click to remove filter
    console.log("adding filter")
    if(!e.target.textContent.includes("\u2713")) {
      this.props.action(e.target.textContent);
      e.target.textContent = e.target.textContent + " \u2713";
    }
  }

  searchHasTag(tag) {
    let tags = [].concat(this.props.search.body, 
                          this.props.search.make, 
                          this.props.search.transmission, 
                          this.props.search.drivetrain);
    for(let i in tags) {
      if(tags[i].toUpperCase() === tag.toUpperCase()) {
        return true;
      }
    }
    return false;
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