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
        <div className={index === 0 ? 'carousel-item active' : 'carousel-item'} key={slider.id} style={{
          backgroundImage: `url(${slider.image})`,
          backgroundSize: 'cover', 
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }} />
         
        
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
