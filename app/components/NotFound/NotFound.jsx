import React from 'react';
import './css/NotFound.scss';
import NotFoundIcon from './images/not_found_icon.png';

const NotFound = () => (
  <div className="not_found_page">
    <div className="container">
      <img src={NotFoundIcon} alt="not fount icon" />
      <div className="not-found-text-wrapper">
        <h3>404 page not found</h3>
        <p>We are sorry but the page you are looking for does not exist.</p>
      </div>
    </div>
  </div>
);

export default NotFound;
