/* eslint react/prop-types: 0 */
import React from 'react';
// import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';
import { Navbar, NavbarBrand } from 'reactstrap';

import { connect } from 'react-redux';
import './css/top-nav-bar.scss';

const HomeTopNavBar = props => {
  const tabTitle = props.tabName === 'home' ? <img src={props.hotel.logo_url} alt="" /> : props.tabName;

  const homeCSS = props.tabName === 'home' ? 'home_absolute_nav navbar-dark' : 'navbar-light';

  return (
    <Navbar color="faded" className={homeCSS}>
      <button onClick={props.toggle} type="button" className="mr-2 navbar-toggler">
        <span className="navbar-toggler-icon" />
      </button>

      <NavbarBrand href="/" className="">
        {tabTitle}
      </NavbarBrand>
      <i className="fa fa-search fa-2x" onCLick={props.handleSearch} role="presentation" />
    </Navbar>
  );
};

function mapStateToProps(state) {
  // debugger // eslint-disable-line

  return {
    hotel: state.hotel.hotel
  };
}

export default connect(mapStateToProps)(HomeTopNavBar);
