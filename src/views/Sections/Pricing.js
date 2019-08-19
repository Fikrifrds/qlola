import React from 'react';

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
  name: 'Kedai Kopi'
  },
{
  id: 2,
  name: 'Restoran'
},
{
  id: 3,
  name: 'Kafe'
},
{
  id: 4,
  name: 'Minimarket'
},
{
  id: 5,
  name: 'Barbershop'
},
{
  id: 6,
  name: 'Toko Kue/Roti'
},{
  id: 7,
  name: 'Franchise'
},{
  id: 8,
  name: 'Retail'
},{
  id: 9,
  name: 'Jasa Profesional'
},
]

const color =['primary', 'success', 'warning','primary', 'success', 'warning','primary', 'success', 'warning' ]
const Pricing = () => (
<section className="section section-lg pt-lg-0 mt--0">
            <Container>
            <Row className="justify-content-center text-center mb-xs">
                <Col lg="12">
                  <h3 className="display-5">Satu Point of Sale Untuk Berbagai Macam Bisnis</h3>
                </Col>
              </Row>
              <Row className="justify-content-center">
                <Col lg="12">
                  <Row className="row-grid" style={{ textAlign: 'center'}}>
                    { business.map( (business, index) => (
                      <Col lg="4" key={index} className="pointer">
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
                    </Col>
                    ))}
                   
                  </Row>
                </Col>
              </Row>
            </Container>
          </section>
)

export default Pricing