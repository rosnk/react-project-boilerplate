/* eslint react/prop-types: 0 */
import React from 'react';
import { Link } from 'react-router-dom';
import renderHTML from 'react-render-html';
import Slider from '../Slider/Slider';
import './css/amenity-detail.scss';

const AmenityDetail = props => (
  <div className="amenity-detail">
    <Slider sliders={props.amenity.amenity_sliders} />

    <div className="amenity_header_wrapper">
      <div className="amenity_title">
        <h4>{props.amenity.title}</h4>
        <div className="social_icons_wrapper">
          <Link to={props.amenity.amenity_items[0].value} target="_blank">
            <i className="fa fa-facebook" aria-hidden="true" />
          </Link>
          <Link to={props.amenity.amenity_items[1].value} target="_blank">
            <i className="fa fa-link" aria-hidden="true" />
          </Link>
          <Link to={props.amenity.amenity_items[2].value} target="_blank">
            <i className="fa fa-phone" aria-hidden="true" />
          </Link>

          <Link to={props.amenity.amenity_items[3].value} target="_blank">
            <i className="fa fa-star" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </div>

    <div className="text-description">{renderHTML(props.amenity.description)}</div>
  </div>
);

export default AmenityDetail;
