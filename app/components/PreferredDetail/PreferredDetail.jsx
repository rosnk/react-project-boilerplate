/* eslint react/prop-types: 0 */
import React from 'react';
import { Link } from 'react-router-dom';
import renderHTML from 'react-render-html';
import TabSlider from '../TabSlider/TabSlider';
import './css/preferred-detail.scss';

const PreferredDetail = props => {
  const getDestinationURL = () => {
    const destination = `${props.preferredItem.address}, ${props.preferredItem.city}, ${props.preferredItem.state}, ${
      props.preferredItem.zip
    }`;

    const destinationUrl = `http://maps.google.com/maps?daddr=${destination}`;

    return destinationUrl;
  };

  const handleDirectionButtonClick = () => window.open(getDestinationURL(), '_blank');

  const getMapURL = mapImage => {
    let mapUrl = null;
    if (mapImage !== undefined) {
      mapUrl = decodeURIComponent(mapImage.replace(/http:\/\//i, 'https://'));
    }

    return mapUrl;
  };

  return (
    <div className="preferred-detail">
      {props.preferredItem}
      <TabSlider sliders={props.preferredItem.slides} />

      <div className="preferred_header_wrapper">
        <div className="preferred_title">
          <h4>{props.preferredItem.title}</h4>
          <p>{props.preferredItem.address}</p>
          <div className="social_icons_wrapper">
            {props.preferredItem.address ? (
              <Link to={getDestinationURL()} target="_blank">
                <i className="fa fa-map-marker fa-2x" aria-hidden="true" />
              </Link>
            ) : null}

            {props.preferredItem.facebook ? (
              <Link to={props.preferredItem.facebook} target="_blank">
                <i className="fa fa-facebook fa-2x" aria-hidden="true" />
              </Link>
            ) : null}

            {props.preferredItem.twitter ? (
              <Link to={props.preferredItem.twitter} target="_blank">
                <i className="fa fa-twitter fa-2x" aria-hidden="true" />
              </Link>
            ) : null}

            {props.preferredItem.website ? (
              <Link to={props.preferredItem.website} target="_blank">
                <i className="fa fa-link fa-2x" aria-hidden="true" />
              </Link>
            ) : null}

            {props.preferredItem.phone && (props.preferredItem.sponsored || props.preferredItem.premium) ? (
              <i className="fa fa-phone fa-2x" aria-hidden="true" />
            ) : null}
          </div>
        </div>
      </div>

      {props.preferredItem.description !== '' ? (
        <div className="text-description">{renderHTML(props.preferredItem.description)}</div>
      ) : null}

      <div className="google_map">
        <img src={getMapURL(props.preferredItem.mapImage)} alt="" />

        <button type="button" className="btn btn-primary" onClick={() => handleDirectionButtonClick()}>
          Get Directions
        </button>
      </div>
    </div>
  );
};

export default PreferredDetail;
