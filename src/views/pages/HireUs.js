import React from "react";

// reactstrap components
import {
  Button,
  Card,
  CardBody,
  FormGroup,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col
} from "reactstrap";

// core components
import Navbar from "components/Navbars/Navbar.js";
import SimpleFooterProject from "components/Footers/SimpleFooterProject.js";

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fullName: '',
      emailAddress: '',
      phoneNumber: '',
      messageBody: '',
      isSending: false,
      sent: false
    };
  }

  componentDidMount() {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    this.refs.main.scrollTop = 0;
  }
  
  handleChange = e => {
    this.setState( {[e.target.name] : e.target.value} )
  }

  handleSubmit = async e => {
    e.preventDefault();
    this.setState({ isSending: true });
    await fetch('https://qlola-api.herokuapp.com/email', {
      method: 'post',
      headers: {'Content-Type':'application/json'},
      body: JSON.stringify({
       fullName: this.state.fullName, 
       emailAddress: this.state.emailAddress, 
       phoneNumber: this.state.phoneNumber, 
       messageBody: this.state.messageBody
      })
     });
     this.setState({ isSending: false, sent: true})
  }

  render() {
    const { fullName, emailAddress, phoneNumber, messageBody} = this.state;

    return (
      <>
        <Navbar />
        <main ref="main">
          <section className="section section-shaped section-lg">
            <div className="shape bg-gradient-default">
              <span />
              <span />
              <span />
              <span />
              <span />
              <span />
              <span />
              <span />
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
            <Container className="pt-lg-md">
              <Row className="justify-content-center">
                <Col lg="5">
                  <Card className="bg-secondary shadow border-0">
                    <CardBody className="px-lg-5 py-lg-5">
                      { this.state.sent ? 
                        <div className="text-center text-muted mb-4">
                          Thank You for Sending us a Message<br/><br/>
                          <span style={{ fontSize: '30px'}} aria-label="a thumbs up blasting off" role="img">👍</span>
                      </div> :
                      <>
                      <div className="text-center text-muted mb-4">
                        <small>Describe Your Need</small>
                      </div>
                      <Form role="form" onSubmit={this.handleSubmit}>
                      <FormGroup className="mb-3">
                          <InputGroup className="input-group-alternative">
                            <InputGroupAddon addonType="prepend">
                              <InputGroupText>
                                <i className="ni ni-single-02" />
                              </InputGroupText>
                            </InputGroupAddon>
                            <Input 
                            placeholder="Full Name" 
                            type="text" 
                            value={fullName}
                            name="fullName"
                            onChange={this.handleChange}
                            required={true}
                            />
                          </InputGroup>
                        </FormGroup>
                        <FormGroup className="mb-3">
                          <InputGroup className="input-group-alternative">
                            <InputGroupAddon addonType="prepend">
                              <InputGroupText>
                                <i className="ni ni-email-83" />
                              </InputGroupText>
                            </InputGroupAddon>
                            <Input 
                            placeholder="Email Address" 
                            type="email" 
                            value={emailAddress}
                            name="emailAddress"
                            onChange={this.handleChange}
                            required={true}
                            />
                          </InputGroup>
                        </FormGroup>
                        <FormGroup>
                          <InputGroup className="input-group-alternative">
                            <InputGroupAddon addonType="prepend">
                              <InputGroupText>
                                <i className="ni ni-mobile-button" />
                              </InputGroupText>
                            </InputGroupAddon>
                            <Input
                              placeholder="Phone (Optional)"
                              type="text"
                              autoComplete="off"
                              value={phoneNumber}
                              name="phoneNumber"
                              onChange={this.handleChange}
                            />
                          </InputGroup>
                        </FormGroup>
                        <FormGroup>
                          <InputGroup className="input-group-alternative">
                            <InputGroupAddon addonType="prepend">
                              <InputGroupText>
                          
                              </InputGroupText>
                            </InputGroupAddon>
                            <textarea class="form-control form-control-alternative" rows="3" 
                            placeholder="Write your message here ..."
                            type="text"
                            autoComplete="off"
                            value={messageBody}
                            name='messageBody'
                            required={true}
                            onChange={this.handleChange}
                              >

                            </textarea>
                          </InputGroup>
                        </FormGroup>
                        <div className="text-center">
                          <Button
                            className="my-4"
                            color="primary"
                            type="submit"
                            disabled={this.state.isSending}
                          >
                          <span className="btn-inner--icon mr-1">
                        <i className="fa fa-send" />
                        </span> Send{this.state.isSending ? 'ing...' : ''}
                          </Button>
                        </div>
                      </Form>
                      </>
                      }
                      
                    </CardBody>
                  </Card>
                </Col>
              </Row>
            </Container>
          </section>
        </main>
        <SimpleFooterProject />
      </>
    );
  }
}

export default Login;
