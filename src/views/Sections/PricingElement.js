import React from 'react';
import NumberFormat from 'react-number-format';
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

const features1 = [
  'Produk terbatas',
  'Transaksi terbatas',
  '1 outlet',
  'Laporan'
]

const features2 = [
  'Produk tidak terbatas',
  'Transaksi tidak terbatas',
  'Outlet tidak terbatas',
  'Managemen Inventory',
  'Laporan',
  'Pengelolaan Kas'
]

const plans = [
  {
    name: 'Starter',
    description: 'Cocok untuk usaha kecil',
    price: 0,
    features: features1
  },
  {
    name: 'Pro',
    description: 'Cocok untuk usaha berkembang',
    price: 45000,
    features: features2
  }
]

const colors = ['success', 'warning'];
const icons = ['user-run', 'spaceship']

const Pricing = () => (
<section className="section section-lg pt-lg-0 mt--200">
  <Container>
    <Row className="justify-content-center text-center">
      <Col lg="12">
        <Row className="row-grid justify-content-center">
          { plans.map(( plan ,index) => (
            <Col lg="6">
            <Card className="card-lift--hover shadow border-0" >
              <CardBody className="py-5" >
                <div style={{ minHeight: '600px'}}>
                <div className={`icon icon-shape icon-shape-${colors[index]} rounded-circle mb-4`}>
                  <i className={`ni ni-${icons[index]}`} />
                </div>
                <h6 className={`text-${colors[index]} text-uppercase`}>
                  {plan.name}
                </h6>
                <p className="description mt-3">
                  {plan.description}
                </p>
                <hr />
                { plan.price === 0 ?
                  <p className="price mt-3">
                    <span style={{ fontSize: '30px', fontWeight: 'bold'}}>Gratis</span>
                </p>
                :
                <>
                <p className="price mt-3">
                  Rp. <span style={{ fontSize: '30px', fontWeight: 'bold'}}> 
                  <NumberFormat value={plan.price}displayType={'text'} thousandSeparator={true} format="##.###" />
                    </span>
                </p>
              
                <small>Per bulan</small>
                </>
                }
                

                <hr/>
                <ul style={{ listStyleType: 'none', textAlign:' left' }}>
                  { plan.features.map( feature => (
                    <li><i style={{ color: 'green'}} className="ni ni-check-bold" /> {feature}</li>
                  ))}
                </ul>
                <hr/>
                </div>
                <Button
                  className="mt-4"
                  color={colors[index]}
                  href="#pablo"
                  onClick={e => e.preventDefault()}
                >
                  Daftar Sekarang
                </Button>
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