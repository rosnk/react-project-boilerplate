/* eslint react/prop-types: 0 */
import React, { Component } from 'react';
import { Jumbotron, Input } from 'reactstrap';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { setCurrentLocation, fetchHotelFromAPI } from '../../actions/hotelActions';
import './css/Landing.scss';
import Loader from '../common/Loader/Loader';

import logo from './images/logo.png';

class Landing extends Component {
  constructor(props) {
    super(props);
    this.state = {
      errorMessage: ''
    };
  }

  componentWillMount() {
    this.getLocationAsync();
  }

  getLocationAsync = () => {
    /* Only for dev :: remove this code once complete */
    // const location = {
    //   latitude: 85.2690446,
    //   longitude: 27.686867399999997
    // };
    // this.props.setCurrentLocation(location);
    // this.props.fetchHotelFromAPI(location);
    /* Only for dev :: remove till here */

    const success = pos => {
      const crd = pos.coords;
      const location = {
        latitude: crd.latitude,
        longitude: crd.longitude
      };
      this.props.setCurrentLocation(location);
      this.props.fetchHotelFromAPI(location);
    };

    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition(success);
    } else {
      this.setState({ errorMessage: 'Location service not available.' });
    }
  };

  handleSearch = () => {
    this.props.history.push('/search');
  };

  render() {
    let content = <Loader />;

    if (!this.props.showLoader) {
      content = (
        <Jumbotron>
          <div className="container">
            <div clasName="error_msg">{this.state.errorMessage}</div>
            <div className="banner_content text-center">
              <img src={logo} alt="logo" className="logo" />
              <div>
                <p>Search for Hotels and Resorts</p>
                <Input
                  type="text"
                  name="search"
                  id="search"
                  onClick={this.handleSearch}
                  placeholder="Search for Hotels and Resorts"
                />
              </div>
            </div>

            <Link to="/app-home" className="custom_button">
              Continue
            </Link>
          </div>
        </Jumbotron>
      );
    }

    return content;
  }
}

function mapStateToProps(state) {
  return {
    currentLocation: state.hotel.currentLocation,
    showLoader: state.hotel.showLoader
  };
}

function mapDispatchToProps(dispatch) {
  return {
    setCurrentLocation: location => dispatch(setCurrentLocation(location)),
    fetchHotelFromAPI: location => dispatch(fetchHotelFromAPI(location))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Landing);
