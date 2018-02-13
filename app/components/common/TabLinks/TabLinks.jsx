import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// import { connect } from 'react-redux';
// import { Nav, NavItem, NavLink } from 'reactstrap';
import './css/tab-links.scss';

class TabLinks extends Component {
  constructor(props) {
    super(props);

    // this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }

  render() {
    return (
      <div className="tab-links">
        <h1>{this.state.isOpen}</h1>
        <Link to="home" activeClassName="active">
          Home
        </Link>
        <Link to="amenities">Amenities</Link>
        <Link to="preferred">Preferred</Link>
        <Link to="explore">Explore</Link>

        {/* <Nav>
      <NavItem>
        <NavLink href="#">Home</NavLink>
      </NavItem>
      <NavItem>
        <NavLink href="#">Amenities</NavLink>
      </NavItem>
      <NavItem>
        <NavLink href="#">Preferred</NavLink>
      </NavItem>
      <NavItem>
        <NavLink href="#">Explore</NavLink>
      </NavItem>
    </Nav> */}
      </div>
    );
  }
}

// function mapStateToProps(state) {
//   // debugger // eslint-disable-line
//   return {
//     currentLocation: state.hotel.currentLocation
//   };
// }

// function mapDispatchToProps(dispatch) {
//   return {
//     // showHotelSearch: () => dispatch(showHotelSearch()),
//     setCurrentLocation: location => dispatch(setCurrentLocation(location)),
//     fetchHotelFromAPI: location => dispatch(fetchHotelFromAPI(location))
//     // hideHotelSearch: () => dispatch(hideHotelSearch())
//   };
// }

// export default connect(mapStateToProps, mapDispatchToProps)(TabLinks);

export default TabLinks;
