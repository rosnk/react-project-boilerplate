/* eslint react/prop-types: 0 */
import React, { Component } from 'react';
import { connect } from 'react-redux';

// import { BrowserRouter as Router, Route } from 'react-router-dom';
import './css/amenities.scss';
import { fetchAmenitiesFromAPI } from '../../actions/hotelActions';
// import AmenityDetail from '../AmenityDetail/AmenityDetail';

class Amenities extends Component {
  componentWillMount() {
    this.props.getCurrentUrl();
    this.props.fetchAmenitiesFromAPI(this.props.hotel);
    this.props.collapseHamburgerMenu();
  }

  handleClick = item => {
    this.props.handleAnemityClickedProps(item);
    this.props.history.push(`${this.props.match.path}/amenity-detail`);
  };

  render() {
    return (
      <div className="amenities">
        {this.props.amenities.map(item => (
          <div role="presentation" onClick={() => this.handleClick(item)} className="amenity_wrapper" key={item.id}>
            {console.log(item)}
            <div className="image_wrapper">
              <img src={item.cover_image} className="img-fluid" alt="" />
            </div>
            <p>{item.title}</p>
          </div>
        ))}
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

function mapDispatchToProps(dispatch) {
  return {
    fetchAmenitiesFromAPI: hotel => dispatch(fetchAmenitiesFromAPI(hotel))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Amenities);
