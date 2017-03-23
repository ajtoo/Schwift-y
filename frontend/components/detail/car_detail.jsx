import React from 'react';

class CarDetail extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log(this.props.car)
    return(
      <div className="detail-root">
        <section className="detail-info">
          <img className="detail-image" src={this.props.car.img_url}/>
          <div className="detail-specs">
            <label className="detail-label">{this.props.car.make} {this.props.car.model}</label>
            <p className="detail-spec">Mileage: {this.props.car.mileage}</p>
            <p className="detail-spec">Price: ${this.props.car.price}</p>
            <p className="detail-spec">Transmission: {this.props.car.transmission}</p>
            <p className="detail-spec">Drivetrain: {this.props.car.drivetrain}</p>
            <p className="detail-spec">Body Type: {this.props.car.body}</p>
          </div>
        </section>
        <form className="test-drive-form">
          <input type="text" placeholder="Where should we bring the car?"/>
          <input type="date"/>
          <button>Book Test Drive</button>
        </form>
      </div>
    );
  }
}

export default CarDetail;