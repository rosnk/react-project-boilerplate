/* eslint react/prop-types: 0 */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import './css/home.scss';

import Slider from '../Slider/Slider';

class Home extends Component {
  componentWillMount() {
    this.props.getCurrentUrl();
  }

  render() {
    return (
      <div className="home_page">
        <Slider sliders={this.props.hotel.sliders} />
        <div className="icons">
          <i className="fa fa-facebook fa-2x" aria-hidden="true" />
          <i className="fa fa-arrows-alt fa-2x" aria-hidden="true" />
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    hotel: state.hotel.hotel
  };
}

export default connect(mapStateToProps)(Home);
