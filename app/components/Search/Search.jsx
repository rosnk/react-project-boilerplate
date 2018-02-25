/* eslint react/prop-types: 0 */
import React, { Component } from 'react';
import PlacesAutocomplete from 'react-places-autocomplete';
import { connect } from 'react-redux';
import { Container, Row, Col } from 'reactstrap';
import './css/Search.scss';
import {
  setCurrentLocation,
  searchHotelsFromAPI,
  searchHotelsFromKeyword,
  setHotel,
  fetchAmenitiesFromAPI,
  clearHotelsBeforeSearch
} from '../../actions/hotelActions';
import NoImage from './images/no-image.jpg';
// import HotelsNearList from '../HotelsNearList/HotelsNearList';

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      address: ''
    };
    this.onChange = this.onChange;
  }

  componentWillMount() {
    this.props.clearHotelsBeforeSearch();
  }

  componentDidMount() {
    const input = document.getElementById('search_field');
    input.focus();
    input.select();
  }

  onChange = address => {
    this.setState({ address });

    if (address.length > 3) {
      this.props.searchHotelsFromKeyword(address);

      // geocodeByAddress(this.state.address)
      //   .then(results => getLatLng(results[0]))
      //   .then(latLng => {
      //     const location = {
      //       latitude: latLng.lat,
      //       longitude: latLng.lng
      //     };

      //     this.props.setCurrentLocation(location);
      //     this.props.searchHotelsFromAPI(location);
      //   })

      //   .catch(error => console.error('Error', error));
    }

    if (address.length <= 3) {
      this.removeSearchResultPadding();
    }
  };

  // handleFormSubmit = event => {
  //   alert('hellow');
  //   const address = event;
  //   this.setState({ address });

  //   if (address.length >= 3) {
  //     this.props.searchHotelsFromKeyword(address);
  //   }

  //   geocodeByAddress(this.state.address)
  //     .then(results => getLatLng(results[0]))
  //     .then(latLng => {
  //       const location = {
  //         latitude: latLng.lat,
  //         longitude: latLng.lng
  //       };

  //       this.props.setCurrentLocation(location);
  //       this.props.searchHotelsFromAPI(location);
  //     })

  //     .catch(error => console.error('Error', error));
  // };

  handleRowClick = hotel => {
    this.props.setHotel(hotel);
    this.props.getAmenities(hotel);
    this.props.history.push('/app-home');
  };

  handeSearchClose = () => {
    this.props.history.goBack();
  };

  addSearchResultPadding = paddingTopSize => {
    const searchResult = document.getElementsByClassName('hotel_search_results')[0];
    searchResult.style.paddingTop = `${paddingTopSize + 70}px`;
  };

  removeSearchResultPadding = () => {
    const searchResult = document.getElementsByClassName('hotel_search_results')[0];
    searchResult.style.paddingTop = '20px';
  };

  render() {
    let PlacesAutocompleteDivHeight = document.getElementById('PlacesAutocomplete__autocomplete-container');

    if (PlacesAutocompleteDivHeight) {
      PlacesAutocompleteDivHeight = PlacesAutocompleteDivHeight.clientHeight;
      this.addSearchResultPadding(PlacesAutocompleteDivHeight);
    }

    const inputProps = {
      value: this.state.address,
      id: 'search_field',
      onChange: this.onChange,
      onBlur: () => {
        this.removeSearchResultPadding();
      },
      onKeyDown: e => {
        if (e.keyCode === 27) {
          this.removeSearchResultPadding();
        }
      },
      placeholder: 'Search for Hotels & Resorts by Location'
    };

    function renderImg(img) {
      let image;
      if (img === null) {
        image = <img src={NoImage} alt="" className="no-image" />;
      } else {
        image = <img src={img} alt="" className="img-thumbnail" />;
      }
      return image;
    }

    function uniqueId() {
      function s4() {
        return Math.floor((1 + Math.random()) * 0x10000)
          .toString(16)
          .substring(1);
      }

      return `${s4()}-${s4()}-${s4()}-${s4()}-${s4()}-${s4()}${s4()}${s4()}`;
    }

    return (
      <div className="search">
        <div className="header text-center">
          <h3>Search</h3>

          <i className="fa fa-times fa-2x" onClick={this.handeSearchClose} aria-hidden="true" />
        </div>
        <div className="container">
          <div className="form">
            <form>
              <PlacesAutocomplete inputProps={inputProps} />
            </form>
          </div>

          <div className="hotel_search_results">
            <Container>
              {this.props.hotels.map(item => (
                <Row onClick={() => this.handleRowClick(item)} key={uniqueId()}>
                  <Col xs="4">
                    <div className="img_wrapper text-center">{renderImg(item.logo_small_url)}</div>
                  </Col>
                  <Col xs="8">
                    <h3>{item.name}</h3>
                    <p>{item.address}</p>
                  </Col>
                </Row>
              ))}
            </Container>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  // debugger // eslint-disable-line
  //   debugger;
  return {
    currentLocation: state.hotel.currentLocation,
    hotel: state.hotel.hotel,
    hotels: state.hotel.hotels
  };
}

function mapDispatchToProps(dispatch) {
  return {
    // showHotelSearch: () => dispatch(showHotelSearch()),
    searchHotelsFromAPI: location => dispatch(searchHotelsFromAPI(location)),
    searchHotelsFromKeyword: address => dispatch(searchHotelsFromKeyword(address)),
    setHotel: hotel => dispatch(setHotel(hotel)),
    getAmenities: hotel => dispatch(fetchAmenitiesFromAPI(hotel)),
    setCurrentLocation: location => dispatch(setCurrentLocation(location)),
    clearHotelsBeforeSearch: () => dispatch(clearHotelsBeforeSearch())

    // fetchHotelFromAPI: location => dispatch(fetchHotelFromAPI(location))
    // hideHotelSearch: () => dispatch(hideHotelSearch())
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Search);
