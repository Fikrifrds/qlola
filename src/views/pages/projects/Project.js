import React from "react";
import renderHTML from 'react-render-html';
// reactstrap components
import { Button, Card, Container, Row, Col, CardImg } from "reactstrap";
import { Link } from 'react-router-dom';
// core components
import Navbar from "components/Navbars/Navbar.js";
import SimpleFooter from "components/Footers/SimpleFooter.js";
import projects from './data';


class Harga extends React.Component {
  componentDidMount() {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    this.refs.main.scrollTop = 0;
  }

  render() {
    const {match} = this.props
    const project = projects.filter( project => project.slug() === match.params.slug)[0]
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
                        {project.title}{" "}
                        <span>{project.description}</span>
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
              <Col className="mb-5 mb-md-6" md="12">
                <Card className="shadow border-0">
                    <CardImg
                      alt="..."
                      src={project.imgUrl}
                    />
                </Card>
              </Col>
            </Row>
          </Container>

          <Container className="container-lg">
            <Row>
              <Col className="mb-5 mb-md-6" md="12">
                <div>
                {renderHTML(project.content)}
                </div><br/>
                <div>Site Url : <a target="_blank" rel="noopener noreferrer" href={project.url}>{project.url}</a></div>
              </Col>
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
