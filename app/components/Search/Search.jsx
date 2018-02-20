/* eslint react/prop-types: 0 */
import React, { Component } from 'react';
import PlacesAutocomplete, { geocodeByAddress, getLatLng } from 'react-places-autocomplete';
import { connect } from 'react-redux';
import { Container, Row, Col } from 'reactstrap';
import './css/Search.scss';
import {
  setCurrentLocation,
  searchHotelsFromAPI,
  searchHotelsFromKeyword,
  setHotel,
  fetchAmenitiesFromAPI
} from '../../actions/hotelActions';
import NoImage from './images/no-image.jpg';
// import HotelsNearList from '../HotelsNearList/HotelsNearList';

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      address: ''
    };
    this.onChange = address => {
      this.setState({ address });
      if (address.length >= 3) {
        this.props.searchHotelsFromKeyword(address);
      }

      geocodeByAddress(this.state.address)
        .then(results => getLatLng(results[0]))
        .then(latLng => {
          const location = {
            latitude: latLng.lat,
            longitude: latLng.lng
          };

          this.props.setCurrentLocation(location);
          this.props.searchHotelsFromAPI(location);
        })

        .catch(error => console.error('Error', error));
    };
  }

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

  addSearchResultPadding = () => {
    const searchResult = document.getElementsByClassName('hotel_search_results')[0];
    searchResult.style.paddingTop = '250px';
  };

  removeSearchResultPadding = () => {
    const searchResult = document.getElementsByClassName('hotel_search_results')[0];
    searchResult.style.paddingTop = '20px';
  };

  render() {
    const inputProps = {
      value: this.state.address,
      onChange: this.onChange,
      onMouseLeave: () => {
        this.removeSearchResultPadding();
      },
      onBlur: () => {
        this.removeSearchResultPadding();
      },
      onKeyDown: e => {
        this.addSearchResultPadding();
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
          {/* this.state.location != {} ? <HotelsNearList location={this.state.location} /> : null */}

          <div className="hotel_search_results">
            <Container>
              {this.props.hotels.map(item => (
                <Row onClick={() => this.handleRowClick(item)}>
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
    setCurrentLocation: location => dispatch(setCurrentLocation(location))

    // fetchHotelFromAPI: location => dispatch(fetchHotelFromAPI(location))
    // hideHotelSearch: () => dispatch(hideHotelSearch())
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Search);

// export default Search;
