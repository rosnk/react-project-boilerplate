/* eslint react/prop-types: 0 */
import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { BrowserRouter as Router, Route } from 'react-router-dom';
import './css/preferred.scss';
import { fetchPreferedFromAPI } from '../../actions/hotelActions';
// import AmenityDetail from '../AmenityDetail/AmenityDetail';

class Preferred extends Component {
  componentWillMount() {
    this.props.getCurrentUrl();
    this.props.fetchPreferedFromAPI(this.props.hotel);
  }

  // handleClick = item => {
  //   console.log(item);
  //   this.props.history.push('amenities/amenity-detail');
  // };

  handleClick = () => {
    // this.props.handleAnemityClickedProps(item);
    this.props.history.push(`${this.props.match.path}/preferred-detail`);
  };

  render() {
    console.log(this.props.preferred);
    return (
      <div className="preferred">
        {this.props.preferred.map(item => (
          <div role="presentation" className="card" key={item.id} onClick={() => this.handleClick(item)}>
            <div className="row">
              <div className="col-4">
                <div className="image_wrapper">
                  <img className="card-img-top" src={item.image} alt="" />
                </div>
              </div>

              <div className="col-8">
                <div className="card-body">
                  <h5 className="card-title">{item.title}</h5>
                  <p className="card-text">{item.address}</p>
                </div>
              </div>
            </div>
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
    preferred: state.hotel.preferred
  };
}

function mapDispatchToProps(dispatch) {
  return {
    fetchPreferedFromAPI: hotel => dispatch(fetchPreferedFromAPI(hotel))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Preferred);
