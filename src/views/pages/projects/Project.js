import React from "react";
import renderHTML from 'react-render-html';
// reactstrap components
import { Button, Card, Container, Row, Col, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle } from "reactstrap";
import { Link } from 'react-router-dom';
// core components
import Navbar from "components/Navbars/Navbar.js";
import SimpleFooter from "components/Footers/SimpleFooter.js";
import projects from './data';
import ShowImage from './ShowImage';

class Harga extends React.Component {

  constructor(props) {
    super(props);
    this.state = { urlPathName: '', description: '' };
    this.state = {
      modal: false
    };

    // this.toggle = this.toggle.bind(this);
  }

  componentDidMount() {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    this.refs.main.scrollTop = 0;
  }

  handleSelectImage = (urlPathName, description) => {
    this.setState({ urlPathName: urlPathName, description:description })
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  }

  toggle = () => {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
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
                      src={'https://ik.imagekit.io/qlola/tr:w-1200/' + project.imgPathName}
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
            <Row>
            <ShowImage urlPathName={this.state.urlPathName} description={this.state.description} modal={this.state.modal} toggle={this.toggle} />
              <div style={{ textAlign: 'center', padding:'10px'}}>
                <h3 className="text-center">Images:</h3>
              </div>
            
                <div style={{ display: 'flex', flexWrap: 'wrap'}}>
                  { project.imageCollectionPathName.map((image, index) => (
                    <Col className="mb-5 mb-md-6" md="4" key={index}>
                    <Card onClick={ () => this.handleSelectImage(image.urlPathName, image.description) } style={{ textAlign: 'center', cursor: 'pointer'}}>
                      <CardImg top width="100%" src={project.thumbnailHostname + image.urlPathName} alt="Card image cap" />
                      
                    </Card>
                    <div className="text-center">
                    <p>{image.description}</p>
                    </div>
                      
                    </Col>
                  ))}
                </div>
              
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
