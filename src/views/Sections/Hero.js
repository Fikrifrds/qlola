import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

// reactstrap components
import { Button, Container, Row, Col } from "reactstrap";

function Hero(){

  const bridges = [ 'Website', 'E-Commerce', 'Web App', 'Software', 'Landing Page', 'SaaS', 'API' ]
  const [bridge, setBridge] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      bridge === bridges.length - 1 ? setBridge(0) : setBridge(val => val + 1);
      console.log('fires')
    }, 3000);
    return () => clearInterval(id);
  }, [bridge, bridges.length]);

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
            <Container className="shape-container d-flex align-items-center py-lg">
              <div className="col px-0">
                <Row className="align-items-center justify-content-center">
                  <Col className="text-center" lg="6">
                    <img
                      alt="..."
                      className="img-fluid"
                      src={require("assets/img/brand/qlo-logo.png")}
                      style={{ width: "200px" }}
                    />
                    
                    <p className="lead text-white">
                      We Build <strong>Solutions</strong> Through
                    </p>
                    <h1 className="display-3">
                        <span style={{ color: '#FFC719', fontWeight: 'bold'}}><em>{bridges[bridge]}</em></span>
                    </h1>
                    <div className="btn-wrapper mt-5">
                      <Link to="/contact-us">
                      <Button
                        className="btn-white btn-icon mb-3 mb-sm-0 mr-3"
                        color="default"
                        size="lg"
                      >
                        <span className="btn-inner--icon mr-1">
                        <i className="fa fa-handshake-o" />
                        </span>
                        <span className="btn-inner--text">Contact Us</span>
                      </Button>
                      </Link>{" "}
                      <Link to="/our-works">
                      <Button
                        className="btn-icon mb-3 mb-sm-0"
                        color="github"
                        size="lg"
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

export default Hero;
