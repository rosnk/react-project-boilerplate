/* eslint react/prop-types: 0 */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
// import { BrowserRouter as Router, Route } from 'react-router-dom';
import './css/amenities.scss';
import { fetchAmenitiesFromAPI } from '../../actions/hotelActions';
import AmenityDetail from '../AmenityDetail/AmenityDetail';

class Amenities extends Component {
  componentWillMount() {
    this.props.getCurrentUrl();
    this.props.fetchAmenitiesFromAPI(this.props.hotel);
  }

  componentDidMount() {
    //debugger; // eslint-disable-line
  }

  handleClick = () => {
    this.props.router_props.history.push(`${this.props.router_props.match.path}/amenity-detail`);
  };

  render() {
    return (
      <div>
        <Router history={this.props.history}>
          <div className="content_wrapper">
            <Switch>
              <Route
                exact
                path={this.props.router_props.match.path}
                render={() => <Redirect to={`${this.props.router_props.match.path}/amenity-detail`} />}
              />
            </Switch>
            <div>
              <p role="presentation" onClick={() => this.handleClick()}>
                click for detail
              </p>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the indust
              standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it
              to make a type specimen book. It has survived not only five centuries, but also the leap into electronic
              typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset
              sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus
              PageMaker including versions of Lorem Ipsum.
            </div>
          </div>
        </Router>
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
