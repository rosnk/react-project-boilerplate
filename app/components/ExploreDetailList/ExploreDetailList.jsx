/* eslint react/prop-types: 0 */
import React from 'react';
import { Link } from 'react-router-dom';
import renderHTML from 'react-render-html';
import TabSlider from '../TabSlider/TabSlider';
import './css/explore-detail-list.scss';

const ExploreDetailList = props => {
  const getDestinationURL = () => {
    const destination = `${props.expoDetailListItem.address}, ${props.expoDetailListItem.city}, ${
      props.expoDetailListItem.state
    }, ${props.expoDetailListItem.zip}`;

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
    <div className="expo-detail-list-item">
      {console.log(props.expoDetailListItem)}
      <TabSlider sliders={props.expoDetailListItem.slides} />

      <div className="explore_detail_list_header_wrapper">
        <div className="explore_detail_list_title">
          <h4>{props.expoDetailListItem.title}</h4>
          <p>{props.expoDetailListItem.address}</p>
          <div className="social_icons_wrapper">
            {props.expoDetailListItem.address ? (
              <Link to={getDestinationURL()} target="_blank">
                <i className="fa fa-map-marker fa-2x" aria-hidden="true" />
              </Link>
            ) : null}

            {props.expoDetailListItem.facebook ? (
              <Link to={props.expoDetailListItem.facebook} target="_blank">
                <i className="fa fa-facebook fa-2x" aria-hidden="true" />
              </Link>
            ) : null}

            {props.expoDetailListItem.twitter ? (
              <Link to={props.expoDetailListItem.twitter} target="_blank">
                <i className="fa fa-twitter fa-2x" aria-hidden="true" />
              </Link>
            ) : null}

            {props.expoDetailListItem.website ? (
              <Link to={props.expoDetailListItem.website} target="_blank">
                <i className="fa fa-link fa-2x" aria-hidden="true" />
              </Link>
            ) : null}

            {props.expoDetailListItem.phone &&
            (props.expoDetailListItem.sponsored || props.expoDetailListItem.premium) ? (
              <i className="fa fa-phone fa-2x" aria-hidden="true" />
            ) : null}
          </div>
        </div>
      </div>

      {props.expoDetailListItem.description !== '' ? (
        <div className="text-description">{renderHTML(props.expoDetailListItem.description)}</div>
      ) : null}

      <div className="google_map">
        <img src={getMapURL(props.expoDetailListItem.mapImage)} alt="" />

        <button type="button" className="btn btn-primary" onClick={() => handleDirectionButtonClick()}>
          Get Directions
        </button>
      </div>
    </div>
  );
};

export default ExploreDetailList;
