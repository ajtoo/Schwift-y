import React from 'react';

function toggleDropdown(e) {
  let dropdown = document.querySelector(".location-dropdown");
  let dropdownSelection = document.querySelector("#dropdown-selection");
  if(dropdown.style.visibility !== "visible") {
    dropdown.style.visibility = "visible";
  } else {
    dropdown.style = "visibiity: hidden";
  }
  dropdownSelection.text = getLocation();
}

function getLocation() {
  let location = window.location.hash;
  if(!location.startsWith("#/cars/"))
    return "Location";
  location = location.slice(7).replace("-", " ");
  return location;
}

function MainNav(props) {
  let location = getLocation();
  return(
  <nav className="top-nav">
    <ul className="left-pulled">
      <li><a className="nav-logo" href="#">Schwifty</a></li>
      <li onClick={toggleDropdown}>
        <span id="dropdown-selection">
          {location}
        </span>
        <img src="http://res.cloudinary.com/ajtoo/image/upload/c_scale,w_18/v1489616194/schwifty_arrow_white_down_ufsau1.png"/>
      </li>
      <li>
        <ul className="location-dropdown" onClick={toggleDropdown}>
          <li><a href="#/cars">All</a></li>
          <li><a href="#/cars/San-Francisco">San Francisco</a></li>
          <li><a href="#/cars/Los-Angeles">Los Angeles</a></li>
          <li><a href="#/cars/Orange-County">Orange County</a></li>
          <li><a href="#/cars/Sacramento">Sacramento</a></li>
          <li><a href="#/cars/San-Diego">San Diego</a></li>
          <li><a href="#/cars/Washington-DC">Washington D.C.</a></li>
        </ul>
      </li>
    </ul>
    <ul className="right-pulled">
      <li><img src="http://res.cloudinary.com/ajtoo/image/upload/c_scale,w_19/v1489615610/icon_favorite_white_border_hollow.1To0g3rY_upkpwk.png"/></li>
      <li><a href="#/login">Login</a></li>
    </ul>
  </nav>
  );
}

export default MainNav;