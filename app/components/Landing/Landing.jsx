/* eslint react/prop-types: 0 */
// import React, { Component } from 'react';
import React from 'react';
import { Jumbotron } from 'reactstrap';
import { Link } from 'react-router-dom';
// import { connect } from 'react-redux';
import './css/Landing.scss';
import logo from './images/logo1.png';

const Landing = () => (
  <Jumbotron>
    <div className="container">
      <div className="banner_content text-center">
        <img src={logo} alt="logo" className="logo" />
        <div>
          <p>This is homePage</p>
        </div>
      </div>

      <div className="text-center">
        <Link to="/page-a" className="btn btn-danger ml-2">
          Page A
        </Link>
        <Link to="/page-b" className="btn btn-warning ml-2">
          Page B
        </Link>
      </div>
    </div>
  </Jumbotron>
);

export default Landing;
