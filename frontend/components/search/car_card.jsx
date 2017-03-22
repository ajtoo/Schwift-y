import React from 'react';

class CarCard extends React.Component {
  constructor(props) {
    super(props);
    this.gotoShow = this.gotoShow.bind(this);
  }

  toggleHeart(e) {
    console.log(e.target.style);
    if(e.target.style.backgroundImage !== 'url("https://res.cloudinary.com/ajtoo/image/upload/v1489615610/schwifty_icon_favorite_red_solid_adypax.png")') {
      e.target.style.backgroundImage = 'url("https://res.cloudinary.com/ajtoo/image/upload/v1489615610/schwifty_icon_favorite_red_solid_adypax.png")';
    } else {
      e.target.removeAttribute('style');
    }
    e.stopPropagation();
  }

  gotoShow(e) {
    //TODO: redirect
    // window.location
    console.log("car ID: ", this.props.car.id);
  }

  render() {
    return(
      <article onClick={this.gotoShow} className="car-card">
        <div onClick={this.toggleHeart} className="car-card-heart"/>
        <img className="car-card-img" src={this.props.car.img_url}/>
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