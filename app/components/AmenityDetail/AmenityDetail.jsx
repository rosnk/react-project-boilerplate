/* eslint react/prop-types: 0 */
import React, { Component } from 'react';
import { connect } from 'react-redux';

import './css/amenity-detail.scss';

class AmenityDetail extends Component {
  constructor(props) {
    super(props);

    this.state = {
      abc: 'bla bla'
    };
  }

  render() {
    return (
      <div className="amenity-detail">
        <h1>{this.state.abc}</h1>
        <p>this is amenity detail</p>
      </div>
    );
  }
}

function mapStateToProps(state) {
  // debugger // eslint-disable-line

  return {
    hotel: state.hotel.hotel,
    amenities: state.hotel.amenities
  };
}

// function mapDispatchToProps(dispatch) {
//   return {
//     fetchAmenitiesFromAPI: hotel => dispatch(fetchAmenitiesFromAPI(hotel))
//   };
// }

export default connect(mapStateToProps)(AmenityDetail);

// export default connect(mapStateToProps, mapDispatchToProps)(AmenityDetail);
