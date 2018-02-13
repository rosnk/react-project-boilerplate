/* eslint react/prop-types: 0 */
import React from 'react';
import './css/slider.scss';

const Slider = props => (
  <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
    <ol className="carousel-indicators">
      {props.sliders.map((slider, index) => (
        <li data-target="#carouselExampleIndicators" data-slide-to={index} className={index === 0 ? 'active' : ''} />
      ))}
    </ol>
    <div className="carousel-inner">
      {props.sliders.map((slider, index) => (
        <div className={index === 0 ? 'carousel-item active' : 'carousel-item'} key={slider.id}>
          <img className="d-block w-100" src={slider.image} alt="" />
        </div>
      ))}
    </div>
    <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
      <span className="carousel-control-prev-icon" aria-hidden="true" />
      <span className="sr-only">Previous</span>
    </a>
    <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
      <span className="carousel-control-next-icon" aria-hidden="true" />
      <span className="sr-only">Next</span>
    </a>
  </div>
);

export default Slider;
