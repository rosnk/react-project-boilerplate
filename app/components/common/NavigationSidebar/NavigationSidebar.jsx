import React, { Component } from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import './css/navigation_sidebar.scss';

class NavigationSidebar extends Component {
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

  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-md navbar-dark bg-primary mb-4">
          <a className="navbar-brand" href="#">
            Off Canvas Navbar
          </a>

          <a
            href="#off-canvas"
            className="js-offcanvas-trigger navbar-toggle collapsed"
            data-toggle="collapse"
            data-offcanvas-trigger="off-canvas"
            aria-expanded="false"
          />

          <button
            className="navbar-toggler js-offcanvas-trigger"
            type="button"
            data-toggle="collapse"
            data-target="#navbarCollapse"
            aria-controls="navbarCollapse"
            aria-expanded="false"
            aria-label="Toggle navigation"
            data-offcanvas-trigger="off-canvas"
            onClick={this.toggle}
          >
            <span className="navbar-toggler-icon" />
          </button>

          <div className="collapse navbar-collapse d-none" id="navbarCollapse" isOpen={this.state.isOpen}>
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <a className="nav-link" href="#">
                  Home <span className="sr-only">(current)</span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Link
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link disabled" href="#">
                  Disabled
                </a>
              </li>
            </ul>
            <form className="form-inline mt-2 mt-md-0">
              <input className="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search" />
              <button className="btn btn-outline-success my-2 my-sm-0" type="submit">
                Search
              </button>
            </form>
          </div>
        </nav>

        <aside
          className="js-offcanvas"
          data-offcanvas-options="{ &quot;modifiers&quot;: &quot;left,overlay&quot; }"
          id="off-canvas"
        >
          <ul className="list-unstyled">
            <li>
              Customized content only shown on mobile off canvas view - Lorem ipsum dolor sit amet, consectetur
              adipisicing elit.
            </li>
          </ul>
        </aside>
      </div>
    );
  }
}

export default NavigationSidebar;
