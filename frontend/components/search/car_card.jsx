import React from 'react';

class CarCard extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <article className="car-card">
        <div className="car-card-heart"/>
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