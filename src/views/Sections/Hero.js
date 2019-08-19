import React from "react";
import { Link } from "react-router-dom";

// reactstrap components
import { Button, Container, Row, Col } from "reactstrap";

class Hero extends React.Component {
  render() {
    return (
      <>
        <div className="position-relative">
          {/* Hero for FREE version */}
          <section className="section section-lg section-hero section-shaped">
            {/* Background circles */}
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
            <Container className="shape-container d-flex align-items-center py-lg">
              <div className="col px-0">
                <Row className="align-items-center justify-content-center">
                  <Col className="text-center" lg="6">
                    <img
                      alt="..."
                      className="img-fluid"
                      src={require("assets/img/brand/qlola2-white.png")}
                      style={{ width: "200px" }}
                    />
                    <h1 className="display-3 text-white">
                        <span>Your web development team</span>
                    </h1>
                    <p className="lead text-white">
                      We provide high quality web application
                    </p>
                    <div className="btn-wrapper mt-5">
                      <Link to="/hire-us">
                      <Button
                        className="btn-white btn-icon mb-3 mb-sm-0"
                        color="default"
                        size="lg"
                      >
                        <span className="btn-inner--icon mr-1">
                        <i className="fa fa-handshake-o" />
                        </span>
                        <span className="btn-inner--text">Hire Us</span>
                      </Button>
                      </Link>{" "}
                      <Link to="/our-works">
                      <Button
                        className="btn-icon mb-3 mb-sm-0"
                        color="github"
                        href="https://github.com/creativetimofficial/argon-design-system-react"
                        size="lg"
                        target="_blank"
                      >
                        <span className="btn-inner--icon mr-1">
                          <i className="fa fa-diamond" />
                        </span>
                        <span className="btn-inner--text">
                          <span className="text-warning mr-1">Check Out</span>
                          Our Works
                        </span>
                      </Button>
                      </Link>
                    </div>
                    {/* <div className="mt-5">
                      <small className="text-white font-weight-bold mb-0 mr-2">
                        *proudly coded by
                      </small>
                      <img
                        alt="..."
                        className="ml-1"
                        style={{ height: "28px" }}
                        src={require("assets/img/brand/creativetim-white-slim.png")}
                      />
                    </div> */}
                  </Col>
                </Row>
              </div>
            </Container>
          </section>
        </div>
      </>
    );
  }
}

export default Hero;