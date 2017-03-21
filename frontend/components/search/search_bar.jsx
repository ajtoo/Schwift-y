import React from 'react';

//TODO: onSubmit for search (enter queries the db and resets resultview)

function SearchBar(props) {
  return(
    <header className="search-bar">
      <i className="material-icons search-icon">search</i>
      <input className="search-input" placeholder="Search for a make, model, or body style"/>
      <p className="in-dev">FEATURE IN DEVELOPMENT</p>
      <OrderDropdown/>
    </header>
  );
}

class OrderDropdown extends React.Component{
  constructor(props) {
    super(props)
  }

  toggleDropdown() {
    let dropdown = document.querySelector(".order-dropdown");

    //toggle visibility of the dropdown
    if(dropdown.style.visibility !== "visible") {
      dropdown.style.visibility = "visible";
    } else {
      dropdown.style.visibility = "hidden";
    }
  }

  render() {
    return(
      <div>
        <div className="order-selection" onClick={this.toggleDropdown}>
          <span>
            Mileage
          </span>
          <img className="dropdown-arrow" src="https://res.cloudinary.com/ajtoo/image/upload/v1489615610/schwifty_down_arrow_ivfbhj.png"/>
        </div>
        <ul className="order-dropdown">
          <li>Latest</li>
          <li>Mileage</li>
          <li>Price $-$$</li>
          <li>Price $$-$</li>
        </ul>
      </div>
    );
  };
}

export default SearchBar;