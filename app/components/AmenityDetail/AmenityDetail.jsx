/* eslint react/prop-types: 0 */
import React from 'react';
import { Link } from 'react-router-dom';
import renderHTML from 'react-render-html';
import Slider from '../Slider/Slider';
import './css/amenity-detail.scss';

function iconName(cat) {
  switch (cat) {
    case 'facebook':
      return 'fa fa-facebook';

    case 'twitter':
      return 'fa fa-twitter';

    case 'website':
      return 'fa fa-link';

    case 'phone':
      return 'fa fa-phone';

    case 'reviews':
      return 'fa fa-star';

    default:
      return '';
  }
}

const AmenityDetail = props => (
  <div className="amenity-detail">
    <Slider sliders={props.amenity.amenity_sliders} />

    <div className="amenity_header_wrapper">
      <div className="amenity_title">
        {props.amenity.title !== '' ? <h4>{props.amenity.title}</h4> : ''}

        <div className="social_icons_wrapper">
          {props.amenity.amenity_items.map(item => (
            <Link to={item.value} target="_blank">
              <i className={iconName(item.cat)} aria-hidden="true" />
            </Link>
          ))}
        </div>
      </div>
    </div>
    <div className="text-description">{renderHTML(props.amenity.description)}</div>
  </div>
);

export default AmenityDetail;
