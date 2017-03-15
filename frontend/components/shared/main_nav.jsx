import React from 'react';

function toggleDropdown(e) {
  let dropdown = document.querySelector(".location-dropdown");
  if(dropdown.style.visibility !== "visible") {
    dropdown.style.visibility = "visible";
  } else {
    dropdown.style = "visibiity: hidden";
  }
}

function getLocation() {
  let location = window.location.hash;
  if(location === "#/")
    return "Location";
  location = location.slice(2).replace("-", " ");
  return location;
}

function MainNav(props) {
  let location = getLocation();
  return(
  <nav className="top-nav">
    <ul className="left-pulled">
      <li><a className="nav-logo" href="#">Schwifty</a></li>
      <li onClick={toggleDropdown}>
        <span>
          {location}
        </span>
        <img src="http://res.cloudinary.com/ajtoo/image/upload/c_scale,w_18/v1489616194/schwifty_arrow_white_down_ufsau1.png"/>
      </li>
      <li>
        <ul className="location-dropdown">
          <li><a href="#">All</a></li>
          <li><a href="#/San-Francisco">San Francisco</a></li>
          <li><a href="#/Los-Angeles">Los Angeles</a></li>
          <li><a href="#/Orange-County">Orange County</a></li>
          <li><a href="#/Sacramento">Sacramento</a></li>
          <li><a href="#/San-Diego">San Diego</a></li>
          <li><a href="#/Washington-DC">Washington D.C.</a></li>
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