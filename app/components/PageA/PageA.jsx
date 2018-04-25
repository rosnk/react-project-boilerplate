import React from 'react';
import { Link } from 'react-router-dom';
import './css/page-a.scss';

const PageA = () => (
  <div>
    <Link to="/" className="custom_button">
      Home Page
    </Link>
    <h1 id="compa">This is component A</h1>
  </div>
);

export default PageA;
