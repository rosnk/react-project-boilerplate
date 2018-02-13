import React, { Component } from 'react';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';
import { Collapse, Navbar, NavbarBrand, Nav, NavItem } from 'reactstrap';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import './css/navigation.scss';
import Home from '../../Home/Home';
import Amenities from '../../Amenities/Amenities';
import Preferred from '../../Preferred/Preferred';
import Explore from '../../Explore/Explore';

class Navigation extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  // componentToShow(comp) {
  //   let component;
  //   switch (comp) {
  //     case 0:
  //       return (component = '<Home />');
  //       break;
  //     case 1:
  //       return (component = '<Amenities />');
  //       break;
  //     case 2:
  //       return (component = '<Preferred />');
  //       break;
  //   }
  // }

  render() {
    // // const { navigation_active } = this.props;
    // function componentToShow(comp) {
    //   return `< ${comp} />`;
    // }

    const routes = [
      {
        path: '/home',
        exact: true,
        nav: 'home',
        main: () => <Home />
      },
      {
        path: '/amenities',
        nav: 'amenities',
        main: () => <Amenities />
      },
      {
        path: '/preferred',
        nav: 'preferred',
        main: () => <Preferred />
      },
      {
        path: '/explore',
        nav: 'explore',
        main: () => <Explore />
      }
    ];

    return (
      <div>
        <Collapse isOpen={this.state.isOpen} navbar>
          <Nav navbar>
            <NavItem>
              <a href="#"> Components</a>
              {/*<NavLink href="/components/">Components</NavLink> */}
            </NavItem>
            <NavItem>
              <a href="#"> Components123</a>
              {/*<NavLink href="https://github.com/reactstrap/reactstrap">Github</NavLink>*/}
            </NavItem>
          </Nav>
        </Collapse>
        <div id="page-content-wrapper">
          <Navbar color="faded" light>
            {/* <NavbarToggler onClick={this.toggle} className="mr-2" /> */}
            <button onClick={this.toggle} type="button" className="mr-2 navbar-toggler">
              <span className="navbar-toggler-icon" />
            </button>

            <NavbarBrand href="/" className="">
              reactstrap
            </NavbarBrand>
            <i className="fa fa-search" />

            {/* <Collapse isOpen={this.state.isOpen} navbar>
            <Nav navbar>
              <NavItem>
                <NavLink href="/components/">Components</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="https://github.com/reactstrap/reactstrap">Github</NavLink>
              </NavItem>
            </Nav>
    </Collapse> */}
          </Navbar>
          <h1>{this.props.navigation_active}</h1>

          <Router>
            <div>
              {routes.map(route => (
                // You can render a <Route> in as many places
                // as you want in your app. It will render along
                // with any other <Route>s that also match the URL.
                // So, a sidebar or breadcrumbs or anything else
                // that requires you to render multiple things
                // in multiple places at the same URL is nothing
                // more than multiple <Route>s.
                <Route path={route.path} exact={route.exact} component={route.main} />
              ))}

              <div className="tab-links">
                <NavLink to="/app-home/Home">
                  <i className="fa fa-home fa-2x text-center" aria-hidden="true" />Home
                </NavLink>
                <NavLink to="/app-home/amenities">
                  <i className="fa fa-info-circle fa-2x text-center" aria-hidden="true" />Amenities
                </NavLink>
                <NavLink to="/app-home/preferred">
                  <i className="fa fa-star-o fa-2x text-center" aria-hidden="true" />Preferred
                </NavLink>
                <NavLink to="/app-home/explore">
                  <i className="fa fa-compass fa-2x text-center" aria-hidden="true" />Explore
                </NavLink>
              </div>

              {/* <div className="tab-links">
                <NavLink to="/Home">
                  <i className="fa fa-home fa-2x text-center" aria-hidden="true" />Home
                </NavLink>
                <NavLink to="/amenities">
                  <i className="fa fa-info-circle fa-2x text-center" aria-hidden="true" />Amenities
                </NavLink>
                <NavLink to="/preferred">
                  <i className="fa fa-star-o fa-2x text-center" aria-hidden="true" />Preferred
                </NavLink>
                <NavLink to="/explore">
                  <i className="fa fa-compass fa-2x text-center" aria-hidden="true" />Explore
                </NavLink>
            </div> */}
            </div>
          </Router>
        </div>
      </div>
    );
  }
}

Navigation.propTypes = {
  navigation_active: PropTypes.string.isRequired
};

function mapStateToProps(state) {
  // debugger // eslint-disable-line
  return {
    navigation_active: state.hotel.navigation_active,
    hotel: state.hotel
  };
}

// function mapDispatchToProps(dispatch) {
//   return {
//     getHotel: location => dispatch(fetchHotelFromAPI(location))
//   };
// }

export default connect(mapStateToProps)(Navigation);

// export default connect()(Navigation);
