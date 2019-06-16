import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import "assets/vendor/nucleo/css/nucleo.css";
import "assets/vendor/font-awesome/css/font-awesome.min.css";
import "assets/scss/argon-design-system-react.scss";

import Index from "views/Index.jsx";
import Landing from "views/examples/Landing.jsx";
import Login from "views/examples/Login.jsx";
import Profile from "views/examples/Profile.jsx";
import Register from "views/examples/Register.jsx";
import Page from "views/examples/Page.jsx";

import Landing2 from "views/pages/Landing.jsx";
import Login2 from "views/pages/Login.jsx";
import About from "views/pages/About.jsx";
import Register2 from "views/pages/Register.jsx";

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" exact render={props => <Index {...props} />} />
      <Route
        path="/landing-page"
        exact
        render={props => <Landing {...props} />}
      />
      <Route path="/login-page" exact render={props => <Login {...props} />} />
      <Route
        path="/profile-page"
        exact
        render={props => <Profile {...props} />}
      />
      <Route
        path="/register-page"
        exact
        render={props => <Register {...props} />}
      />

      <Route
        path="/landing-page-2"
        exact
        render={props => <Landing2 {...props} />}
      />
      <Route path="/login-page-2" exact render={props => <Login2 {...props} />} />
      <Route
        path="/about"
        exact
        render={props => <About {...props} />}
      />
      <Route
        path="/register-page-2"
        exact
        render={props => <Register2 {...props} />}
      />

      <Route
        path="/page"
        exact
        render={props => <Page {...props} />}
      />
      <Redirect to="/" />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);
