/* eslint react/prop-types: 0 */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import './css/home.scss';

import Slider from '../Slider/Slider';
import SliderForModel from '../SliderForModel/SliderForModel';

class Home extends Component {
  componentWillMount() {
    this.props.getCurrentUrl();
    this.props.collapseHamburgerMenu();
  }

  render() {
    return (
      <div className="home_page">
        <Slider sliders={this.props.hotel.sliders} />
        <div className="icons">
          <Link to={this.props.hotel.facebook} target="_blank">
            <i className="fa fa-facebook fa-2x" aria-hidden="true" />
          </Link>

          <i className="fa fa-arrows-alt fa-2x" aria-hidden="true" data-toggle="modal" data-target="#exampleModal" />
        </div>

        <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog modal-lg" role="document">
    <div className="modal-content">
    
      <div className="modal-header">
        
        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div className="modal-body">
      <SliderForModel sliders={this.props.hotel.sliders} />
      </div>
     
    </div>
  </div>
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
