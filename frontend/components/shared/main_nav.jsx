import React from 'react';
import {Link} from 'react-router';

//TODO: change from <a> tags to 
class MainNav extends React.Component {
  constructor(props) {
    super(props);
    this.selectItem = this.selectItem.bind(this);
  }

  toggleDropdown() {
    let dropdown = document.querySelector(".location-dropdown");
    if(dropdown.style.visibility !== "visible") {
      dropdown.style.visibility = "visible";
    } else {
      dropdown.style.visibility = "hidden";
    }
  }

  selectItem(e) {
    let location = e.target.innerHTML;
    if(location === "All"){
      document.querySelector("#dropdown-selection").innerHTML = "Location";
      this.toggleDropdown();
    } 
    else{
      console.log(e.target.innerHTML)
      document.querySelector("#dropdown-selection").innerHTML = e.target.innerHTML;
      this.toggleDropdown();
    }
  }

  getLocation() {
    let location = window.location.hash;
    if(!location.startsWith("#/cars/"))
      return "Location";
    location = location.slice(7).replace("-", " ");
    return location;
  }

  render() {
    console.log("rendering");
    return(
    <nav className="top-nav">
      <ul className="left-pulled">
        <li><a className="nav-logo" href="#">Schwifty</a></li>
        <li onClick={this.toggleDropdown}>
          <span id="dropdown-selection">
            {this.getLocation()}
          </span>
          <img src="https://res.cloudinary.com/ajtoo/image/upload/c_scale,w_18/v1489616194/schwifty_arrow_white_down_ufsau1.png"/>
        </li>
        <li>
          <ul className="location-dropdown">
            <a to="cars" onClick={this.selectItem}><li>All</li></a>
            <a to="cars/San-Francisco" onClick={this.selectItem}><li>San Francisco</li></a>
            <a to="cars/Los-Angeles"onClick={this.selectItem}><li>Los Angeles</li></a>
            <a to="cars/Orange-County" onClick={this.selectItem}><li>Orange County</li></a>
            <a to="cars/Sacramento" onClick={this.selectItem}><li>Sacramento</li></a>
            <a to="cars/San-Diego" onClick={this.selectItem}><li>San Diego</li></a>
            <a to="cars/Washington-DC" onClick={this.selectItem}><li>Washington D.C.</li></a>
          </ul>
        </li>
      </ul>
      <ul className="right-pulled">
        <li><img src="https://res.cloudinary.com/ajtoo/image/upload/c_scale,w_19/v1489615610/icon_favorite_white_border_hollow.1To0g3rY_upkpwk.png"/></li>
        <li><Link to={this.props.loggedIn ? "logout" : "login"}>{this.props.loggedIn ? "Log Out" : "Log In/Sign Up"}</Link></li>
      </ul>
    </nav>
    );
  }
}

export default MainNav;