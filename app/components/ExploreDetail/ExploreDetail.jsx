/* eslint react/prop-types: 0 */
import React from 'react';
// import { Link } from 'react-router-dom';
// import Slider from '../Slider/Slider';
import './css/explore-detail.scss';

// const handleClick = props => {
//   debugger; // eslint-disable-line
// };

const ExploreDetail = props => {
  const handleClick = item => {
    props.handleExploreDetailClickedProps(item);
    props.history.push(`${props.match.path}/explore-detail-list`);
  };

  return (
    <div className="explore-detail">
      {props.expoItem[0].map(item => (
        <div role="presentation" className="card" key={item.id} onClick={() => handleClick(item)}>
          <div className="row">
            <div className="col-4">
              <div className="image_wrapper">
                <img className="card-img-top" src={item.image} alt="" />
              </div>
            </div>

            <div className="col-8">
              <div className="card-body">
                <h5 className="card-title">{item.title}</h5>
                <p className="card-text">{item.address}</p>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* <Slider sliders={props.amenity.amenity_sliders} />

    <div className="amenity_header_wrapper">
      <div className="amenity_title">
        <h4>{props.amenity.title}</h4>
        <div className="social_icons_wrapper">
          <Link to={props.amenity.amenity_items[0].value} target="_blank">
            <i className="fa fa-facebook fa-2x" aria-hidden="true" />
          </Link>
          <Link to={props.amenity.amenity_items[1].value} target="_blank">
            <i className="fa fa-link fa-2x" aria-hidden="true" />
          </Link>
          <Link to={props.amenity.amenity_items[2].value} target="_blank">
            <i className="fa fa-phone fa-2x" aria-hidden="true" />
          </Link>

          <Link to={props.amenity.amenity_items[3].value} target="_blank">
            <i className="fa fa-star fa-2x" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </div>

<div className="text-description">{props.amenity.description}</div> */}
    </div>
  );
};

export default ExploreDetail;
