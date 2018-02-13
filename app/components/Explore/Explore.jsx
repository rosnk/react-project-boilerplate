/* eslint react/prop-types: 0 */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import './css/explore.scss';
import { fetchExploreAdsFromAPI } from '../../actions/hotelActions';

class Explore extends Component {
  componentWillMount() {
    this.props.getCurrentUrl();
    this.props.fetchExploreAdsFromAPI(this.props.hotel, this.props.location);
  }

  handleClick = category => {
    const filteredAds = [];
    this.props.exploreAdvertisements.forEach(ad => {
      ad.cat.forEach(cat => {
        if (cat === category.key) {
          filteredAds.push(ad);
        }
      });
    });

    this.props.handleExploreClickedProps([filteredAds, { title: category.title }]);

    this.props.history.push(`${this.props.match.path}/explore-detail`);
  };

  render() {
    return (
      <div className="explore">
        {this.props.exploreCategories.map(category => (
          <div
            role="presentation"
            onClick={() => this.handleClick(category)}
            className="explore_wrapper"
            key={category.id}
          >
            <div className="image_wrapper">
              <img src={category.image_url} className="img-fluid" alt="" />
            </div>
            <p>{category.title}</p>
          </div>
        ))}
      </div>
    );
  }
}

function mapStateToProps(state) {
  // debugger // eslint-disable-line

  return {
    hotel: state.hotel.hotel,
    location: state.hotel.currentLocation,
    exploreAdvertisements: state.hotel.exploreAdvertisements,
    exploreCategories: state.hotel.exploreCategories
  };
}

function mapDispatchToProps(dispatch) {
  return {
    fetchExploreAdsFromAPI: (hotel, location) => dispatch(fetchExploreAdsFromAPI(hotel, location))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Explore);
