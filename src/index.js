import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import "assets/vendor/nucleo/css/nucleo.css";
import "assets/vendor/font-awesome/css/font-awesome.min.css";
import "assets/scss/argon-design-system-react.scss";

import Page from "views/examples/Page.jsx";
import Landing from "views/pages/Landing.jsx";
import Login from "views/pages/Login.jsx";
import About from "views/pages/About.jsx";
import Register from "views/pages/Register.jsx";

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" exact render={props => <Page {...props} />} />

      <Route
        path="/landing-page-2"
        exact
        render={props => <Landing {...props} />}
      />
      <Route path="/login-page-2" exact render={props => <Login {...props} />} />
      <Route
        path="/about"
        exact
        render={props => <About {...props} />}
      />
      <Route
        path="/register-page-2"
        exact
        render={props => <Register {...props} />}
      />

      <Redirect to="/" />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);
