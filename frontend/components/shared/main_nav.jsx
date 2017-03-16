import React from 'react';

function toggleDropdown(e) {
  let dropdown = document.querySelector(".location-dropdown");
  if(dropdown.style.visibility !== "visible") {
    dropdown.style.visibility = "visible";
  } else {
    dropdown.style.visibility = "hidden";
  }
}

function getLocation() {
  let location = window.location.hash;
  if(!location.startsWith("#/cars/"))
    return "Location";
  location = location.slice(7).replace("-", " ");
  return location;
}

function getSessionMessage(loggedIn) {
  if(loggedIn)
    return "Log Out";
  else
    return "Log In/Sign Up";
}

function getSessionLink(loggedIn) {
  if(loggedIn)
    return "#/logout";
  else
    return "#/login";
}

function MainNav(props) {
  console.log("rendering");
  return(
  <nav className="top-nav">
    <ul className="left-pulled">
      <li><a className="nav-logo" href="#">Schwifty</a></li>
      <li onClick={toggleDropdown}>
        <span id="dropdown-selection">
          {getLocation()}
        </span>
        <img src="https://res.cloudinary.com/ajtoo/image/upload/c_scale,w_18/v1489616194/schwifty_arrow_white_down_ufsau1.png"/>
      </li>
      <li>
        <ul className="location-dropdown">
          <a href="#/cars"><li onClick={toggleDropdown}>All</li></a>
          <a href="#/cars/San-Francisco"><li onClick={toggleDropdown}>San Francisco</li></a>
          <a href="#/cars/Los-Angeles"><li onClick={toggleDropdown}>Los Angeles</li></a>
          <a href="#/cars/Orange-County"><li onClick={toggleDropdown}>Orange County</li></a>
          <a href="#/cars/Sacramento"><li onClick={toggleDropdown}>Sacramento</li></a>
          <a href="#/cars/San-Diego"><li onClick={toggleDropdown}>San Diego</li></a>
          <a href="#/cars/Washington-DC"><li onClick={toggleDropdown}>Washington D.C.</li></a>
        </ul>
      </li>
    </ul>
    <ul className="right-pulled">
      <li><img src="https://res.cloudinary.com/ajtoo/image/upload/c_scale,w_19/v1489615610/icon_favorite_white_border_hollow.1To0g3rY_upkpwk.png"/></li>
      <li><a href={getSessionLink(props.loggedIn)}>{getSessionMessage(props.loggedIn)}</a></li>
    </ul>
  </nav>
  );
}

export default MainNav;