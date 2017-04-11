import React from 'react';
import {Link, hashHistory} from 'react-router';
import * as FavoriteApi from '../../util/favorites_api_util'
import CarCard from '../search/car_card';

class MainNav extends React.Component {
  constructor(props) {
    super(props);
    this.selectItem = this.selectItem.bind(this);
    this.showFavorites = this.showFavorites.bind(this);
    this.showTestDrives = this.showTestDrives.bind(this);
    this.state = {
      favoritesList: []
    };
  }

  componentWillMount() {
    let favoritesList = [];
    console.log(this.props.testDrives);
    for(let i = 0; i < favoritesList.length; ++i) {
      favoritesList.push(<CarCard key={i} car={favoritesList[i]} uid={this.props.user.id}/>);
    }
    this.setState({favoritesList: favoritesList});
  }

  componentWillReceiveProps() {
    console.log(this.props.testDrives);
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
    let dropdownSelection = document.querySelector("#dropdown-selection");

    if(location === "All"){
      dropdownSelection.innerHTML = "Location";
      this.toggleDropdown();
      if("cars" !== window.location.hash.slice(2))
        hashHistory.push("cars");
    }
    else{
      dropdownSelection.innerHTML = location.toString();
      this.toggleDropdown();
      this.switchHashLocation(location);
    }
  }

  switchHashLocation(location) {
    if(location === "Washington D.C.") {
      if("cars/Washington-DC" !== window.location.hash.slice(2))
        hashHistory.push("cars/Washington-DC");
    } else {
      let hashAddress = "cars/" + location.replace(" ", "-");
      if(hashAddress !== window.location.hash.slice(2))
        hashHistory.push(hashAddress)
    }
  }

  getLocation() {
    let location = window.location.hash;
    if(!location.startsWith("#/cars/"))
      return "Location";
    location = location.slice(7).replace("-", " ");
    return location;
  }

  showFavorites(e) {
    let target = document.querySelector(".favorites")
    if(target.style.visibility !== "visible") {
        target.style.visibility = "visible";

        //disable clicking rest of page
        let searchView = document.querySelector(".search-root")
        searchView.style.pointerEvents = "none";
        searchView.style.filter = "opacity(40%)";

      } else {
        // target.style.visibility = "hidden";
        location.reload();    //temporary hack-fix until reducer and store sync are up
      }
  }

  getFavoritesAndRerender() {
    //ultra hacky but necessary to meet deadline
    //TODO: delete and replace with actual store modification
    FavoriteApi.findUserFavorites(this.props.user.id).then((cars) => {
      let favoritesList = [];
      for(let i = 0; i < cars.length; ++i) {
        favoritesList.push(<CarCard key={i} car={cars[i]} uid={this.props.user.id}/>);
      }
      this.setState({favoritesList: favoritesList});
      setTimeout(this.showFavorites, 250);
    });
  }

  showTestDrives() {
    this.props.getUserTestDrives(this.props.user.id).then(this.toggleTestDrives());
  }

  toggleTestDrives() {
    let target = document.querySelector(".test-drives")
    if(target.style.visibility !== "visible") {
        target.style.visibility = "visible";
      } else {
        target.style.visibility = "hidden";
      }
  }

  render() {
    console.log("render nav");
    //protects my button from non-logged in users
    let favoritesButton = "";
    let testDrivesLink = "";
    let testDrives = [];
    if(this.props.loggedIn) {
      favoritesButton = <li onClick={this.getFavoritesAndRerender.bind(this)} className="favorites-logo"><img src="https://res.cloudinary.com/ajtoo/image/upload/c_scale,w_19/v1489615610/icon_favorite_white_border_hollow.1To0g3rY_upkpwk.png"/></li>;
      testDrivesLink = <li onClick={this.showTestDrives}>View Test Drives</li>
      for(let i in this.props.testDrives.drives) {
        testDrives.push(<TestDriveCard key={i} uid={this.props.user.id} testDrive={this.props.testDrives.drives[i]} car={this.props.testDrives.cars[i]} delete={this.props.deleteTestDrive} getUserTestDrives={() => this.props.getUserTestDrives(this.props.user.id)}/>);
      }
    }

    return(
    <nav className="top-nav">
      <ul className="left-pulled">
        <li><a className="nav-logo" href="#">Schwift(y)</a></li>
        <li onClick={this.toggleDropdown}>
          <span id="dropdown-selection">
            {this.getLocation()}
          </span>
          <img src="https://res.cloudinary.com/ajtoo/image/upload/c_scale,w_18/v1489616194/schwifty_arrow_white_down_ufsau1.png"/>
        </li>
        <li>
          <ul className="location-dropdown">
            <li onClick={this.selectItem}>All</li>
            <li onClick={this.selectItem}>San Francisco</li>
            <li onClick={this.selectItem}>Los Angeles</li>
            <li onClick={this.selectItem}>Orange County</li>
            <li onClick={this.selectItem}>Sacramento</li>
            <li onClick={this.selectItem}>San Diego</li>
            <li onClick={this.selectItem}>Washington D.C.</li>
          </ul>
        </li>
      </ul>
      <header className="favorites" onBlur={this.showFavorites}>
        {this.state.favoritesList}
      </header>
      <ul className="right-pulled">
        {testDrivesLink}
        {favoritesButton}
        <li><Link to={this.props.loggedIn ? "logout" : "login"}>{this.props.loggedIn ? "Log Out" : "Log In/Sign Up"}</Link></li>
      </ul>
      <ul className="test-drives">
        {testDrives.length ? testDrives : ""}
      </ul>
    </nav>
    );
  }
}

class TestDriveCard extends React.Component {
  constructor(props) {
    super(props);
    this.deleteTestDrive = this.deleteTestDrive.bind(this);
  }

  deleteTestDrive() {
    this.props.delete({car_id: this.props.car.id, uid: this.props.uid}).then(this.props.getUserTestDrives);
  }

  render() {
    console.log("render TDCard");
    return(
      <li className="test-drive">
        <i onClick={this.deleteTestDrive} className="test-drive-delete"><strong>x</strong></i>
        <label>
          <strong>{this.props.car.make} {this.props.car.model}</strong>
          <p className="test-drive-date">Date: {this.props.testDrive.date}</p>
        </label>
        <img className="test-drive-image" src={this.props.car.img_url}/>
      </li>
    );
  }
}

export default MainNav;