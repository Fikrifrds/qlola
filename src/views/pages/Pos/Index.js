import React from "react";
// nodejs library that concatenates classes
import classnames from "classnames";

// reactstrap components
import {
  Badge,
  Button,
  Card,
  CardBody,
  CardImg,
  FormGroup,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col
} from "reactstrap";

// core components
import Navbar from "./NavbarPos";
import CardsFooter from "components/Footers/CardsFooter";
import Pricing from '../../Sections/Pricing';
import { Link } from 'react-router-dom';

// index page sections
import Download from "../../Sections/Download";
import SimpleFooter from "components/Footers/SimpleFooter";

class Pos extends React.Component {
  state = {};
  componentDidMount() {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    this.refs.main.scrollTop = 0;
  }
  render() {
    return (
      <>
        <Navbar />
        <main ref="main">
          <div className="position-relative">
            {/* shape Hero */}
            <section className="section section-lg section-shaped pb-250">
              <div className="shape bg-gradient-default">
              <span className="span-150" />
              <span className="span-50" />
              <span className="span-50" />
              <span className="span-75" />
              <span className="span-100" />
              <span className="span-75" />
              <span className="span-50" />
              <span className="span-100" />
              <span className="span-50" />
              <span className="span-100" />
              </div>
              
              <Container className="shape-container align-items-center py-5">
                <Row className="row-grid align-items-center" style={{ paddingTop: '0px'}}>
                <Col className="order-md-2" md="7">
                  <img
                    alt="..."
                    className="img-fluid floating"
                    src={require("assets/img/mockup.png")}
                  />
                </Col>
                <Col className="order-md-1" md="5">
                <div className="pr-md-5">
                      <h1 className="display-3 text-white">
                        Qlola Point Of Sales{" "}
                        <span>Aplikasi Kasir Online</span>
                      </h1>
                      <p className="lead text-white">
                        Mengelola bisnis menjadi lebih mudah
                      </p>
                      <div className="btn-wrapper">
                        {/* <Button
                          className="btn-icon mb-3 mb-sm-0"
                          color="primary"
                          href="https://demos.creative-tim.com/argon-design-system-react/#/documentation/alerts?ref=adsr-landing-page"
                        >
                          <span className="btn-inner--icon mr-1">
                            <i className="fa fa-code" />
                          </span>
                          <span className="btn-inner--text">Daftar Gratis Sekarang</span>
                        </Button> */}
                        <Link to="/pos/register">
                    <Button
                      className="btn-neutral btn-icon"
                      color="default"
                    >
                      {/* <span className="btn-inner--icon">
                        <i className="fa fa-handshake-o mr-2" />
                      </span> */}
                      <span className="nav-link-inner--text ml-1">
                        Daftar Gratis Sekarang
                      </span>
                    </Button>
                    </Link>
                      </div>
                      </div>
                    </Col>
                    
                  </Row>
              </Container>
              {/* SVG separator */}
              <div className="separator separator-bottom separator-skew">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="none"
                version="1.1"
                viewBox="0 0 2560 100"
                x="0"
                y="0"
              >
                <polygon
                  className="fill-white"
                  points="2560 0 2560 100 0 100"
                />
              </svg>
            </div>
            </section>
            
            {/* 1st Hero Variation */}
          </div>
          <section className="section section-lg">
          <Pricing />
          </section>
          <section className="section section-lg">
            <Container>
              <Row className="row-grid align-items-center">
                <Col className="order-md-2" md="6">
                  <img
                    alt="..."
                    className="img-fluid"
                    src={require("assets/img/theme/promo-1.png")}
                  />
                </Col>
                <Col className="order-md-1" md="6">
                  <div className="pr-md-5">
                    <div className="icon icon-lg icon-shape icon-shape-success shadow rounded-circle mb-5">
                      <i className="ni ni-box-2" />
                    </div>
                    <h3>Fitur Lengkap dan mudah digunakan</h3>
                    <ul className="list-unstyled mt-5">
                      <li className="py-2">
                        <div className="d-flex align-items-center">
                          <div>
                            <Badge
                              className="badge-circle mr-3"
                              color="success"
                            >
                              <i className="ni ni-chart-bar-32" />
                            </Badge>
                          </div>
                          <div>
                            <h6 className="mb-0">
                              Pantau Laporan dan penjualan
                            </h6>
                          </div>
                        </div>
                      </li>
                      <li className="py-2">
                        <div className="d-flex align-items-center">
                          <div>
                            <Badge
                              className="badge-circle mr-3"
                              color="success"
                            >
                              <i className="ni ni-app" />
                            </Badge>
                          </div>
                          <div>
                            <h6 className="mb-0">Kelola stok</h6>
                          </div>
                        </div>
                      </li>
                      <li className="py-2">
                        <div className="d-flex align-items-center">
                          <div>
                            <Badge
                              className="badge-circle mr-3"
                              color="success"
                            >
                              <i className="ni ni-shop" />
                            </Badge>
                          </div>
                          <div>
                            <h6 className="mb-0">Cabang tak terbatas</h6>
                          </div>
                        </div>
                      </li>
                      <li className="py-2">
                        <div className="d-flex align-items-center">
                          <div>
                            <Badge
                              className="badge-circle mr-3"
                              color="success"
                            >
                              <i className="ni ni-single-02" />
                            </Badge>
                          </div>
                          <div>
                            <h6 className="mb-0">Operator/Kasir tak terbatas</h6>
                          </div>
                        </div>
                      </li>
                      <li className="py-2">
                        <div className="d-flex align-items-center">
                          <div>
                            <Badge
                              className="badge-circle mr-3"
                              color="success"
                            >
                              <i className="ni ni-send" />
                            </Badge>
                          </div>
                          <div>
                            <h6 className="mb-0">
                              Cetak atau kirim email bukti pembayaran  
                            </h6>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </Col>
              </Row>
            </Container>
          </section>
          <section className="section bg-secondary">
            <Container>
              <Row className="row-grid align-items-center">
                <Col md="6">
                  <img
                    alt="..."
                    className="img-fluid"
                    src={require("assets/img/mockup.png")}
                  />
                </Col>
                <Col md="6">
                  <div className="pl-md-5">
                    {/* <div className="icon icon-lg icon-shape icon-shape-warning shadow rounded-circle mb-5">
                      <i className="ni ni-settings" />
                    </div> */}
                    <h3>Didesain untuk berbagai bevice</h3>
                    <p className="lead">
                    Dapat digunakan di Komputer, Laptop, Tablet maupun handphone tanpa instalasi karena Qlola POS berbasiskan web.

                    </p>
                    {/* <a
                      className="font-weight-bold text-warning mt-5"
                      href="#pablo"
                      onClick={e => e.preventDefault()}
                    >
                      A beautiful UI Kit for impactful websites
                    </a> */}
                  </div>
                </Col>
              </Row>
            </Container>
          </section>
          <section className="section pb-6 bg-gradient-primary">
            <Container>
              <Row className="row-grid align-items-center">
                <Col className="order-lg-2 ml-lg-auto" md="6">
                  <div className="position-relative pl-md-5">
                  <img
                    alt="..."
                    className="img-fluid"
                    src={require("assets/img/mockup.png")}
                  />
                  </div>
                </Col>
                <Col className="order-lg-1" lg="6">
                  <div className="d-flex px-3">
                    <div>
                      {/* <div className="icon icon-lg icon-shape bg-gradient-white shadow rounded-circle text-primary">
                        <i className="ni ni-building text-primary" />
                      </div> */}
                    </div>
                    <div className="pl-4">
                      <p className="lead text-white">
                        Aplikasi Kasir POS dengan Fitur yang lengkap, namun dengan Harga terjangkau, hanya Rp 45.000/bulan Tanpa Batasan Fitur dan Jumlah Perangkat.
                      </p>
                    </div>
                  </div>
                  {/* <Card className="shadow shadow-lg--hover mt-5">
                    <CardBody>
                      <div className="d-flex px-3">
                        <div>
                          <div className="icon icon-shape bg-gradient-success rounded-circle text-white">
                            <i className="ni ni-satisfied" />
                          </div>
                        </div>
                        <div className="pl-4">
                          <h5 className="title text-success">
                            Awesome Support
                          </h5>
                          <p>
                            The Arctic Ocean freezes every winter and much of
                            the sea-ice then thaws every summer, and that
                            process will continue whatever.
                          </p>
                          <a
                            className="text-success"
                            href="#pablo"
                            onClick={e => e.preventDefault()}
                          >
                            Learn more
                          </a>
                        </div>
                      </div>
                    </CardBody>
                  </Card> */}
                  {/* <Card className="shadow shadow-lg--hover mt-5">
                    <CardBody>
                      <div className="d-flex px-3">
                        <div>
                          <div className="icon icon-shape bg-gradient-warning rounded-circle text-white">
                            <i className="ni ni-active-40" />
                          </div>
                        </div>
                        <div className="pl-4">
                          <h5 className="title text-warning">
                            Modular Components
                          </h5>
                          <p>
                            The Arctic Ocean freezes every winter and much of
                            the sea-ice then thaws every summer, and that
                            process will continue whatever.
                          </p>
                          <a
                            className="text-warning"
                            href="#pablo"
                            onClick={e => e.preventDefault()}
                          >
                            Learn more
                          </a>
                        </div>
                      </div>
                    </CardBody>
                  </Card> */}
                </Col>
              </Row>
            </Container>
          </section>
         
          <section className="section section-lg bg-gradient-default">
            <Container className="pt-lg pb-300">
              <Row className="text-center justify-content-center">
                <Col lg="10">
                  <h2 className="display-3 text-white">Build something</h2>
                  <p className="lead text-white">
                    According to the National Oceanic and Atmospheric
                    Administration, Ted, Scambos, NSIDClead scentist, puts the
                    potentially record low maximum sea ice extent tihs year down
                    to low ice.
                  </p>
                </Col>
              </Row>
            </Container>
  
            <div className="separator separator-bottom separator-skew zindex-100">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="none"
                version="1.1"
                viewBox="0 0 2560 100"
                x="0"
                y="0"
              >
                <polygon
                  className="fill-white"
                  points="2560 0 2560 100 0 100"
                />
              </svg>
            </div>
          </section>
          <section className="section section-lg pt-lg-0 section-contact-us">
            <Container>
              <Row className="justify-content-center mt--300">
                <Col lg="8">
                  <Card className="bg-gradient-secondary shadow">
                    <CardBody className="p-lg-5">
                      <h4 className="mb-1">Want to work with us?</h4>
                      <p className="mt-0">
                        Your project is very important to us.
                      </p>
                      <FormGroup
                        className={classnames("mt-5", {
                          focused: this.state.nameFocused
                        })}
                      >
                        <InputGroup className="input-group-alternative">
                          <InputGroupAddon addonType="prepend">
                            <InputGroupText>
                              <i className="ni ni-user-run" />
                            </InputGroupText>
                          </InputGroupAddon>
                          <Input
                            placeholder="Your name"
                            type="text"
                            onFocus={e => this.setState({ nameFocused: true })}
                            onBlur={e => this.setState({ nameFocused: false })}
                          />
                        </InputGroup>
                      </FormGroup>
                      <FormGroup
                        className={classnames({
                          focused: this.state.emailFocused
                        })}
                      >
                        <InputGroup className="input-group-alternative">
                          <InputGroupAddon addonType="prepend">
                            <InputGroupText>
                              <i className="ni ni-email-83" />
                            </InputGroupText>
                          </InputGroupAddon>
                          <Input
                            placeholder="Email address"
                            type="email"
                            onFocus={e => this.setState({ emailFocused: true })}
                            onBlur={e => this.setState({ emailFocused: false })}
                          />
                        </InputGroup>
                      </FormGroup>
                      <FormGroup className="mb-4">
                        <Input
                          className="form-control-alternative"
                          cols="80"
                          name="name"
                          placeholder="Type a message..."
                          rows="4"
                          type="textarea"
                        />
                      </FormGroup>
                      <div>
                        <Button
                          block
                          className="btn-round"
                          color="default"
                          size="lg"
                          type="button"
                        >
                          Send Message
                        </Button>
                      </div>
                    </CardBody>
                  </Card>
                </Col>
              </Row>
            </Container>
          </section>
        </main>
      <SimpleFooter />
      </>
    );
  }
}

export default Pos;
