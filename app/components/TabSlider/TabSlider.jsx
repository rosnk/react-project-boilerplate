/* eslint react/prop-types: 0 */
import React from 'react';
import './css/tab-slider.scss';

function uniqueId() {
  function s4() {
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
  }

  return `${s4()}-${s4()}-${s4()}-${s4()}-${s4()}-${s4()}${s4()}${s4()}`;
}

const TabSlider = props => (
  <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
    <ol className="carousel-indicators">
      {props.sliders.map((slider, index) => (
        <li data-target="#carouselExampleIndicators" data-slide-to={index} className={index === 0 ? 'active' : ''} />
      ))}
    </ol>
    <div className="carousel-inner">
      {props.sliders.map((slider, index) => (
        <div className={index === 0 ? 'carousel-item active' : 'carousel-item'} key={uniqueId()}>
          <img className="d-block w-100" src={slider} alt="" />
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

export default TabSlider;
