/* eslint react/prop-types: 0 */
import React, { Component } from 'react';
// import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';
import { Navbar, NavbarBrand } from 'reactstrap';

import { connect } from 'react-redux';
import './css/top-nav-bar.scss';

class TopNavBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false
    };
  }

  render() {
    return (
      <div>
        <Navbar color="faded" light>
          <button onClick={this.props.toggle} type="button" className="mr-2 navbar-toggler">
            <span className="navbar-toggler-icon" />
          </button>

          <NavbarBrand href="/" className="">
            <img src={this.props.hotel.logo_url} alt="" />
          </NavbarBrand>
          <i className="fa fa-search" onCLick={this.props.handleSearch} role="presentation" />
        </Navbar>
        {this.state.isOpen}
      </div>
    );
  }
}

function mapStateToProps(state) {
  // debugger // eslint-disable-line
  // debugger;
  return {
    hotel: state.hotel.hotel
  };
}

export default connect(mapStateToProps)(TopNavBar);
// export default HomeTopNavBar;
