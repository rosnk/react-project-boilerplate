import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setCurrentLocation, fetchHotelFromAPI } from '../../actions/hotelActions';
import './css/hotels_near_list.scss';

class HotelsNearList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      address: '',
      location: {}
    };
    this.onChange = address => this.setState({ address });
  }

  render() {
    return {};
  }
}

function mapStateToProps(state) {
  return {
    searchVisible: state.ui.searchVisible
  };
}

function mapDispatchToProps(dispatch) {
  return {
    setHotel: hotel => dispatch(setHotel(hotel)),
    hideModal: () => dispatch(hideHotelSearch()),
    getAmenities: hotel => dispatch(fetchAmenitiesFromAPI(hotel))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(HotelsNearList);

// export default HotelsNearList;
