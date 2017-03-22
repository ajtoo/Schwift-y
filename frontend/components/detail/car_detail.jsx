import React from 'react';

class CarDetail extends React.Component {
  constructor(props) {
    super(props);
  }
  
  componentDidMount() {
    let carID = Number(window.location.hash.slice(6));
    $.ajax({
      
    }).then(data => console.log(data))
  }

  render() {
    return(
      <div>{window.location.hash}</div>
    );
  }
}

export default CarDetail;