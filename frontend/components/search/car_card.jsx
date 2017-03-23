import React from 'react';
import {hashHistory} from 'react-router';
import * as FavoriteApi from '../../util/favorites_api_util';
import {getCar} from '../../actions/car_actions';

class CarCard extends React.Component {
  constructor(props) {
    super(props);
    this.gotoShow = this.gotoShow.bind(this);
    this.toggleHeart = this.toggleHeart.bind(this);
  }

  componentDidMount() {
    FavoriteApi.getFavorite({user_id: this.props.uid, car_id: this.props.car.id}).then( (fav) => {
      if(fav) {
        let thisHeart = document.getElementById(`car-${fav.car_id}`);
        thisHeart.style.backgroundImage = 'url("https://res.cloudinary.com/ajtoo/image/upload/v1489615610/schwifty_icon_favorite_red_solid_adypax.png")';
      }
    });
    
  }

  toggleHeart(e) {
    if(e.target.style.backgroundImage !== 'url("https://res.cloudinary.com/ajtoo/image/upload/v1489615610/schwifty_icon_favorite_red_solid_adypax.png")') {
      e.target.style.backgroundImage = 'url("https://res.cloudinary.com/ajtoo/image/upload/v1489615610/schwifty_icon_favorite_red_solid_adypax.png")';
      FavoriteApi.favorite({user_id: this.props.uid, car_id: this.props.car.id});
      //TDOD: update store
    } else {
      e.target.removeAttribute('style');
      FavoriteApi.unfavorite({user_id: this.props.uid, car_id: this.props.car.id});
      //TODO: update store
    }
    e.stopPropagation();
  }

  gotoShow(e) {
    hashHistory.push(`car/${this.props.car.id}`)
  }

  render() {
    return(
      <article onClick={this.gotoShow} className="car-card">
        <div onClick={this.toggleHeart} className="car-card-heart" id={`car-${this.props.car.id}`}/>
        <img  className="car-card-img" src={this.props.car.img_url}/>
        <label className="car-card-name"><strong>{this.props.car.make}</strong> {this.props.car.model}</label>
        <section className="car-card-info">
          <div>
            <label className="car-card-year">{this.props.car.year}</label>
            <label className="car-card-miles">{Math.round(this.props.car.mileage/1000)}k miles</label>
          </div>
          <label className="car-card-price">${this.props.car.price}</label>
        </section>
      </article>
    );
  }
}

export default CarCard;