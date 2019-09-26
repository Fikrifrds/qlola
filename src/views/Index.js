import React from "react";

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

import classnames from "classnames";

// core components
import Navbar from "components/Navbars/Navbar.js";
import SimpleFooterProject from "components/Footers/SimpleFooterProject.js";

// index page sections
import Hero from "./Sections/Hero.js";
import Download from "./Sections/Download.js";

class Index extends React.Component {
state = {}
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
          <Hero />
        </main>
        <SimpleFooterProject />
      </>
    );
  }
}

export default Index;
