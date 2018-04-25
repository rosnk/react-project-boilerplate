import React from 'react';
import { Link } from 'react-router-dom';
import './css/page-b.scss';

const PageB = () => (
  <div>
    <Link to="/" className="custom_button">
      Home Page
    </Link>
    <h1 id="compa">This is component B</h1>
  </div>
);

export default PageB;
