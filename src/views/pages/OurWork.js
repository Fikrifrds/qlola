import React from "react";

// reactstrap components
import { Button, Card, Container, Row, Col, CardImg } from "reactstrap";
import { Link } from 'react-router-dom';
// core components
import Navbar from "components/Navbars/Navbar.js";
import SimpleFooter from "components/Footers/SimpleFooter.js";
import projects from './projects/data'

class Harga extends React.Component {
  componentDidMount() {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    this.refs.main.scrollTop = 0;
  }
  render() {
    return (
      <>
        <Navbar />
        <main className="profile-page" ref="main">
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
              <Container className="shape-container d-flex align-items-center py-5 justify-content-center">
                <Row className="row-grid align-items-center">
                <Col className="order-md-1" md="12">
                <div className="pr-md-5">
                      <h1 className="display-3 text-white text-center">
                        Our Solutions to Businesses and Institutions{" "}
                        <span></span>
                      </h1>
                      {/* <p className="lead text-white">
                        Mengelola bisnis menjadi lebih mudah
                      </p> */}
                      <div className="btn-wrapper">

                      </div>
                      </div>
                    </Col>
                    
                  </Row>
              </Container>
            </section>
      
            <section className="section section-lg pt-lg-0 mt--200">
            <Container className="container-lg">
            <Row>
              { projects.map( project => (
                <Col className="mb-5 mb-md-6" md="6">
                <Card className="card-lift--hover shadow border-0">
                  <Link to={`/our-works/${project.slug()}`}>
                    <CardImg
                      alt="..."
                      src={project.thumbnailHostname + project.imgPathName}
                    />
                  </Link>
                  <div style={{ padding: '20px'}}>
                  <h5 class="card-title">{project.title}</h5>
                    <span class="card-text">{project.description}</span>
                  </div>
                  
                </Card>
              </Col>
              ))}
              
              
            </Row>
          </Container>
        </section>
            {/* 1st Hero Variation */}
          </div>
        </main>
        <SimpleFooter />
      </>
    );
  }
}

export default Harga;
