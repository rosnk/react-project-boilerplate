/* eslint react/prop-types: 0 */
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, NavLink, Redirect, Switch } from 'react-router-dom';
import { Collapse, Nav } from 'reactstrap';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
// import styled from 'styled-components';
import './css/navigation.scss';
import Home from '../../Home/Home';
import Amenities from '../../Amenities/Amenities';
import Preferred from '../../Preferred/Preferred';
import Explore from '../../Explore/Explore';
import TopNavBar from '../TopNavBar/TopNavBar';
import AmenityDetail from '../../AmenityDetail/AmenityDetail';
import PreferredDetail from '../../PreferredDetail/PreferredDetail';
import ExploreDetail from '../../ExploreDetail/ExploreDetail';
import ExploreDetailList from '../../ExploreDetailList/ExploreDetailList';

class Navigation extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false,
      current_url: '',
      amenity_item_for_detail_page: '',
      preferred_item_for_detail_page: '',
      explore_item_for_detail_page: '',
      explore_item_for_detail_list_page: ''
    };
  }

  getCurrentUrl = () =>
    this.setState({
      current_url: window.location.pathname
    });

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  handleSearch = () => {
    this.props.history.push('/search');
  };

  handleAnemityClickedProps = item => {
    this.setState({ amenity_item_for_detail_page: item });
  };

  handlePreferredClickedProps = item => {
    this.setState({ preferred_item_for_detail_page: item });
  };

  handleExploreClickedProps = item => {
    this.setState({ explore_item_for_detail_page: item });
  };

  handleExploreDetailClickedProps = item => {
    this.setState({ explore_item_for_detail_list_page: item });
  };

  render() {
    const urlName = (() => {
      switch (this.state.current_url) {
        case '/app-home/preferred':
          return 'Preferred';

        case '/app-home/amenities':
          return 'Amenities';

        case '/app-home/explore':
          return 'Explore';

        default:
          return 'home';
      }
    })();

    const otherTabCSS = urlName === 'home' ? '' : 'other_tabs';

    return (
      <div>
        <Collapse isOpen={this.state.isOpen} navbar>
          <div className="banner_logo text-center">
            <img src={this.props.hotel.logo_url} alt="" />
          </div>
          <Nav navbar className="text-center">
            <a href="/app-home/home">Home</a>
            <a href="/app-home/amenities">Amenities</a>
            <a href="/app-home/preferred">Preferred</a>
            <a href="/app-home/explore">Explore</a>
          </Nav>
        </Collapse>

        <div id="page-content-wrapper" className={`page-content-wrapper ${otherTabCSS}`}>
          <TopNavBar tabName={urlName} toggle={this.toggle} handleSearch={this.handleSearch} />

          {/* <h1>{this.state.current_url}</h1>
    <p>{urlName}</p> */}
          {/* <Navbar color="faded" light>
             
            <button onClick={this.toggle} type="button" className="mr-2 navbar-toggler">
              <span className="navbar-toggler-icon" />
            </button>

            <NavbarBrand href="/" className="">
              <img src={this.props.hotel.logo_url} alt="" />
            </NavbarBrand>
            <i className="fa fa-search" onCLick={this.handleSearch} />
          </Navbar> */}

          <Router history={this.props.history}>
            <div className="content_wrapper">
              <Switch>
                <Route
                  exact
                  path={this.props.match.path}
                  render={() => <Redirect to={`${this.props.match.path}/home`} />}
                />
                <Route
                  path={`${this.props.match.path}/home`}
                  render={() => <Home getCurrentUrl={this.getCurrentUrl} />}
                />
                <Route
                  exact
                  path={`${this.props.match.path}/amenities/amenity-detail`}
                  render={props => (
                    <AmenityDetail
                      {...props}
                      amenity={
                        this.state.amenity_item_for_detail_page !== '' ? this.state.amenity_item_for_detail_page : ''
                      }
                    />
                  )}
                />
                <Route
                  exact
                  path={`${this.props.match.path}/amenities`}
                  render={props => (
                    <Amenities
                      getCurrentUrl={this.getCurrentUrl}
                      {...props}
                      handleAnemityClickedProps={this.handleAnemityClickedProps}
                    />
                  )}
                />
                <Route
                  exact
                  path={`${this.props.match.path}/preferred/preferred-detail`}
                  render={props => (
                    <PreferredDetail
                      {...props}
                      preferredItem={
                        this.state.preferred_item_for_detail_page !== ''
                          ? this.state.preferred_item_for_detail_page
                          : ''
                      }
                    />
                  )}
                />
                <Route
                  path={`${this.props.match.path}/preferred`}
                  render={props => (
                    <Preferred
                      {...props}
                      getCurrentUrl={this.getCurrentUrl}
                      handlePreferredClickedProps={this.handlePreferredClickedProps}
                    />
                  )}
                />

                <Route
                  exact
                  path={`${this.props.match.path}/explore/explore-detail/explore-detail-list`}
                  render={props => (
                    <ExploreDetailList
                      {...props}
                      expoDetailListItem={
                        this.state.explore_item_for_detail_list_page !== ''
                          ? this.state.explore_item_for_detail_list_page
                          : ''
                      }
                    />
                  )}
                />

                <Route
                  exact
                  path={`${this.props.match.path}/explore/explore-detail`}
                  render={props => (
                    <ExploreDetail
                      {...props}
                      expoItem={
                        this.state.explore_item_for_detail_page !== '' ? this.state.explore_item_for_detail_page : ''
                      }
                      handleExploreDetailClickedProps={this.handleExploreDetailClickedProps}
                    />
                  )}
                />
                <Route
                  path={`${this.props.match.path}/explore`}
                  render={props => (
                    <Explore
                      {...props}
                      getCurrentUrl={this.getCurrentUrl}
                      handleExploreClickedProps={this.handleExploreClickedProps}
                    />
                  )}
                />
              </Switch>
              <div className="tab-links">
                <NavLink to={`${this.props.match.url}/home`}>
                  <i className="fa fa-home fa-2x text-center" aria-hidden="true" />Home
                </NavLink>
                <NavLink to={`${this.props.match.url}/amenities`}>
                  <i className="fa fa-info-circle fa-2x text-center" aria-hidden="true" />Amenities
                </NavLink>
                <NavLink to={`${this.props.match.url}/preferred`}>
                  <i className="fa fa-star-o fa-2x text-center" aria-hidden="true" />Preferred
                </NavLink>
                <NavLink to={`${this.props.match.url}/explore`}>
                  <i className="fa fa-compass fa-2x text-center" aria-hidden="true" />Explore
                </NavLink>
              </div>
            </div>
          </Router>
        </div>
      </div>
    );
  }
}

Navigation.propTypes = {
  hotel: PropTypes.shape({}).isRequired
};

function mapStateToProps(state) {
  // debugger // eslint-disable-line
  // debugger;

  return {
    hotel: state.hotel.hotel
  };
}

// function mapDispatchToProps(dispatch) {
//   return {
//     getHotel: location => dispatch(fetchHotelFromAPI(location))
//   };
// }

export default connect(mapStateToProps)(Navigation);

// export default connect()(Navigation);
