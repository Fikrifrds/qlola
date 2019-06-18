import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import "assets/vendor/nucleo/css/nucleo.css";
import "assets/vendor/font-awesome/css/font-awesome.min.css";
import "assets/scss/argon-design-system-react.scss";

import Index from "views/Index.jsx";
import Landing from "views/pages/Landing.jsx";
import Login from "views/pages/Login.jsx";
import About from "views/pages/About.jsx";
import Register from "views/pages/Register.jsx";
import HireUs from "views/pages/HireUs.jsx";
import OurWork from "views/pages/OurWork.jsx";

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" exact render={props => <Index {...props} />} />

      <Route
        path="/landing"
        exact
        render={props => <Landing {...props} />}
      />
      <Route path="/login" exact render={props => <Login {...props} />} />
      <Route
        path="/about"
        exact
        render={props => <About {...props} />}
      />
      <Route
        path="/register"
        exact
        render={props => <Register {...props} />}
      />
      <Route
        path="/hire-us"
        exact
        render={props => <HireUs {...props} />}
      />
      <Route
        path="/our-works"
        exact
        render={props => <OurWork {...props} />}
      />
      <Redirect to="/" />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);
