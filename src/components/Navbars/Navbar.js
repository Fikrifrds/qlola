import React from "react";
import { Link } from "react-router-dom";
// JavaScript plugin that hides or shows a component based on your scroll
import Headroom from "headroom.js";
// reactstrap components
import {
  Button,
  UncontrolledCollapse,
  DropdownMenu,
  DropdownItem,
  DropdownToggle,
  UncontrolledDropdown,
  Media,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
  Row,
  Col,
  UncontrolledTooltip
} from "reactstrap";

class DemoNavbar extends React.Component {
  componentDidMount() {
    let headroom = new Headroom(document.getElementById("navbar-main"));
    // initialise
    headroom.init();
  }
  render() {
    return (
      <>
        <header className="header-global">
          <Navbar
            className="navbar-main navbar-transparent navbar-light headroom"
            expand="lg"
            id="navbar-main"
          >
            <Container>
            <a href="/">
              <NavbarBrand className="mr-lg-5">
                
                <img
                  alt="..."
                  src={require("assets/img/brand/qlola4-white.png")}
                />
                
              </NavbarBrand>
              </a>
              <button className="navbar-toggler" id="navbar_global">
                <span className="navbar-toggler-icon" />
              </button>
              <UncontrolledCollapse navbar toggler="#navbar_global">
                <div className="navbar-collapse-header">
                  <Row>
                    <Col className="collapse-brand" xs="6">
                      <a href="/">
                        <img
                          alt="..."
                          src={require("assets/img/brand/qlola2-blue.png")}
                        />
                      </a>
                    </Col>
                    <Col className="collapse-close" xs="6">
                      <button className="navbar-toggler" id="navbar_global">
                        <span />
                        <span />
                      </button>
                    </Col>
                  </Row>
                </div>
                <Nav className="navbar-nav-hover align-items-lg-center" navbar>
                  <UncontrolledDropdown nav>
                    <DropdownToggle nav>
                      <i className="ni ni-ui-04 d-lg-none mr-1" />
                      <span className="nav-link-inner--text">Fitur</span>
                    </DropdownToggle>
                    <DropdownMenu className="dropdown-menu-xl">
                      <div className="dropdown-menu-inner">
                        <Media
                          className="d-flex align-items-center"
                          href="https://demos.creative-tim.com/argon-design-system-react/#/documentation/overview?ref=adsr-navbar"
                          target="_blank"
                        >
                          <div className="icon icon-shape bg-gradient-primary rounded-circle text-white">
                            <i className="ni ni-tablet-button" />
                          </div>
                          <Media body className="ml-3">
                            <h6 className="heading text-primary mb-md-1">
                              Point of Sales
                            </h6>
                            <p className="description d-none d-md-inline-block mb-0">
                              Learn how to use Argon compiling Scss, change
                              brand colors and more.
                            </p>
                          </Media>
                        </Media>
                        <Media
                          className="d-flex align-items-center"
                          to="/landing"
                          target="_blank"
                        >
                          <div className="icon icon-shape bg-gradient-success rounded-circle text-white">
                            <i className="ni ni-cart" />
                          </div>
                          <Media body className="ml-3">
                          <Link to="/landing">
                            <h6 className="heading text-primary mb-md-1">
                              Qlola Store
                            </h6>
                            </Link>
                            <p className="description d-none d-md-inline-block mb-0">
                              Learn more about colors, typography, icons and the
                              grid system we used for Argon.
                            </p>
                          </Media>
                        </Media>
                        <Media
                          className="d-flex align-items-center"
                          href="https://demos.creative-tim.com/argon-design-system-react/#/documentation/alert?ref=adsr-navbar"
                          target="_blank"
                        >
                          <div className="icon icon-shape bg-gradient-warning rounded-circle text-white">
                            <i className="ni ni-palette" />
                          </div>
                          <Media body className="ml-3">
                            <h5 className="heading text-primary mb-md-1">
                              Custome Web App
                            </h5>
                            <p className="description d-none d-md-inline-block mb-0">
                              Browse our 50 beautiful handcrafted components
                              offered in the Free version.
                            </p>
                          </Media>
                        </Media>
                      </div>
                    </DropdownMenu>
                  </UncontrolledDropdown>
                  <NavItem>
                  <NavLink tag={Link}
                      className="nav-link-icon"
                      to="/pricing"
                    >
                      Harga
                    </NavLink>
                  </NavItem>
                </Nav>
                <Nav className="align-items-lg-center ml-lg-auto" navbar>
                  
                  <NavItem>
                  <a
                      className="nav-link-icon"
                      href="https://pos.qlola.com/"
                    >
                      Login
                    </a>
                  </NavItem>
                  <NavItem className="d-none d-lg-block ml-lg-4">
                    <Link to="/register">
                    <Button
                      className="btn-neutral btn-icon"
                      color="default"
                    >
                      {/* <span className="btn-inner--icon">
                        <i className="fa fa-handshake-o mr-2" />
                      </span> */}
                      <span className="nav-link-inner--text ml-1">
                        Daftar
                      </span>
                    </Button>
                    </Link>
                  </NavItem>
                </Nav>
              </UncontrolledCollapse>
            </Container>
          </Navbar>
        </header>
      </>
    );
  }
}

export default DemoNavbar;
