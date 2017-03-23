import React from 'react';
import {SingleDatePicker} from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';
import * as Moment from 'moment';

class CarDetail extends React.Component {
  constructor(props) {
    super(props);
    this.bookTestDrive = this.bookTestDrive.bind(this);
    this.state = {
      date: null,
      focused: false
    }
  }

  bookTestDrive(e) {
    e.preventDefault()
    let location = document.getElementById("drive-location").value;
    let phone = document.getElementById("phone-number").value;
    console.log(location, phone, this.state.date.format("MM/DD/YYYY"));
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
          <SingleDatePicker
            id="date-picker"
            date={this.state.date} // momentPropTypes.momentObj or null
            numberOfMonths={Number("1")}
            onDateChange={date => this.setState({ date })} // PropTypes.func.isRequired
            focused={this.state.focused} // PropTypes.bool
            onFocusChange={({ focused }) => this.setState({ focused })} // PropTypes.func.isRequired
          />
          <input id="drive-location" type="text" placeholder="Where should we bring the car?"/>
          <input id="phone-number" type="tel" placeholder="Phone Number"/>
          <button onClick={this.bookTestDrive}>Book Test Drive</button>
        </form>
      </div>
    );
  }
}

export default CarDetail;