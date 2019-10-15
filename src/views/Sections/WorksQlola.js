import React from 'react';
import { Link } from 'react-router-dom'

// reactstrap components
import {
  Badge,
  Button,
  Card,
  CardBody,
  Container,
  Row,
  Col
} from "reactstrap";

const business = [
{
  id: 1,
  name: 'Web Application'
  },
{
  id: 2,
  name: 'SaaS'
},
{
  id: 3,
  name: 'CMS'
},
{
  id: 4,
  name: 'API'
},
{
  id: 5,
  name: 'Front End'
},
{
  id: 6,
  name: 'Landing Page'
},{
  id: 7,
  name: 'Website'
}
]

const color =['primary', 'success', 'warning','primary', 'success', 'warning','primary', 'success', 'warning' ]
const Pricing = () => (
<section className="section section-lg pt-lg-0 mt--0">
            <Container>
            <Row className="justify-content-center text-center mb-xs">
                <Col lg="12">
                  <h3 className="display-5">We build solutions</h3>
                </Col>
              </Row>
              <Row className="justify-content-center">
                <Col lg="12">
                  <Row className="row-grid" style={{ textAlign: 'center'}}>
                    { business.map( (business, index) => (
                      
                      
                      <Col lg="4" key={index} className="pointer">
                      <Link to={`/contact-us?need=${business.name}`}>
                      <Card className="card-lift--hover shadow border-0 mt-3">
                        <CardBody className="py-5">
                          {/* <div className={`icon icon-shape icon-shape-${color[index]} rounded-circle mb-4`}>
                            <i className="ni ni-shop" />
                          </div> */}
                          <h6 className={`text-${color[index]} text-uppercase`}>
                            {business.name}
                          </h6>
                          <div>
                          </div>
                        </CardBody>
                      </Card>
                      </Link>
                    </Col>
                    ))}
                   
                  </Row>
                </Col>
              </Row>
            </Container>
          </section>
)

export default Pricing