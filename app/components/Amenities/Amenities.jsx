/* eslint react/prop-types: 0 */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import Loader from '../common/Loader/Loader';
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
    function uniqueId() {
      function s4() {
        return Math.floor((1 + Math.random()) * 0x10000)
          .toString(16)
          .substring(1);
      }

      return `${s4()}-${s4()}-${s4()}-${s4()}-${s4()}-${s4()}${s4()}${s4()}`;
    }

    let content = <Loader />;
    if (!this.props.showLoader) {
      content = (
        <div className="amenities">
          {this.props.amenities.map(item => (
            <div role="presentation" onClick={() => this.handleClick(item)} className="amenity_wrapper" key={uniqueId}>
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

    return content;
  }
}

function mapStateToProps(state) {
  // debugger // eslint-disable-line

  return {
    hotel: state.hotel.hotel,
    amenities: state.hotel.amenities,
    showLoader: state.hotel.showLoader
  };
}

function mapDispatchToProps(dispatch) {
  return {
    fetchAmenitiesFromAPI: hotel => dispatch(fetchAmenitiesFromAPI(hotel))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Amenities);
