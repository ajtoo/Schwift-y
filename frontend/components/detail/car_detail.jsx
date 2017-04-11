import React from 'react';
import {hashHistory} from 'react-router';
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
    if(location && phone && this.state.date) {
      this.props.create({
        date: this.state.date.format("MM/DD/YYYY"),
        phone_number: phone,
        location: location,
        user_id: this.props.session.currentUser.id,
        car_id: this.props.car.id
      }).then(() => {hashHistory.push("/")}, () => alert("Date has been taken, please re-select"));
    } else {
      alert("You must fill in all fields");
    }
  }

  render() {
    let bookButton = ""
    if(Boolean(this.props.session.currentUser))
      bookButton = <button onClick={this.bookTestDrive}>Book Test Drive</button>
    else
     bookButton = <button onClick={this.bookTestDrive} disabled>Log In to Book a Test Drive</button>
    return(
      <div className="detail-root">
        <section className="detail-info">
          <div className="img-container">
            <img className="detail-image" src={this.props.car.img_url}/>
          </div>
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
          <input id="drive-location" type="text" placeholder="Where should we bring the car?" onFocus={(e) => e.target.placeholder = ""} onBlur={(e) => e.target.placeholder = "Where should we bring the car?"}/>
          <input id="phone-number" type="tel" placeholder="Phone Number" onFocus={(e) => e.target.placeholder = ""} onBlur={(e) => e.target.placeholder = "Phone Number"}/>
          {bookButton}
        </form>
      </div>
    );
  }
}

export default CarDetail;