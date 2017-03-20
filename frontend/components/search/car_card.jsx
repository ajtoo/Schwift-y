import React from 'react';

class CarCard extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <article className="car-card">
        <div className="car-card-heart"/>
        <img src="http://res.cloudinary.com/ajtoo/image/upload/v1489995479/Challenger_kqd7zj.jpg"/>
        <label className="car-card-name"><strong>Dodge</strong> Challenger R/T</label>
        <section className="car-card-info">
          <div>
            <label className="car-card-year">2014</label>
            <label className="car-card-miles">13k miles</label>
          </div>
          <label className="car-card-price">$25500</label>
        </section>
      </article>
    );
  }
}

export default CarCard;