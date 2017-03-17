import React from 'react';
import {Link} from 'react-router';

function toggleDropdown() {
  let dropdown = document.querySelector(".location-dropdown");
  if(dropdown.style.visibility !== "visible") {
    dropdown.style.visibility = "visible";
  } else {
    dropdown.style.visibility = "hidden";
  }
}

function selectItem(e) {
  let location = e.target.innerHTML;
  if(location === "All"){
    document.querySelector("#dropdown-selection").innerHTML = "Location";
    toggleDropdown();
  }
  else{
    console.log(e.target.innerHTML)
    document.querySelector("#dropdown-selection").innerHTML = e.target.innerHTML;
    toggleDropdown();
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
    return "logout";
  else
    return "login";
}

class MainNav extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    console.log("rendering");
    return(
    <nav className="top-nav">
      <ul className="left-pulled">
        <li><a className="nav-logo" href="#">Schwifty</a></li>
        <li>
          <span id="dropdown-selection" onClick={toggleDropdown}>
            {getLocation()}
          </span>
          <img src="https://res.cloudinary.com/ajtoo/image/upload/c_scale,w_18/v1489616194/schwifty_arrow_white_down_ufsau1.png"/>
        </li>
        <li>
          <ul className="location-dropdown">
            <Link to="cars" onClick={selectItem}><li>All</li></Link>
            <Link to="cars/San-Francisco" onClick={selectItem}><li>San Francisco</li></Link>
            <Link to="cars/Los-Angeles"onClick={selectItem}><li>Los Angeles</li></Link>
            <Link to="cars/Orange-County" onClick={selectItem}><li>Orange County</li></Link>
            <Link to="cars/Sacramento" onClick={selectItem}><li>Sacramento</li></Link>
            <Link to="cars/San-Diego" onClick={selectItem}><li>San Diego</li></Link>
            <Link to="cars/Washington-DC" onClick={selectItem}><li>Washington D.C.</li></Link>
          </ul>
        </li>
      </ul>
      <ul className="right-pulled">
        <li><img src="https://res.cloudinary.com/ajtoo/image/upload/c_scale,w_19/v1489615610/icon_favorite_white_border_hollow.1To0g3rY_upkpwk.png"/></li>
        <li><Link to={getSessionLink(this.props.loggedIn)}>{getSessionMessage(this.props.loggedIn)}</Link></li>
      </ul>
    </nav>
    );
  }
}

export default MainNav;