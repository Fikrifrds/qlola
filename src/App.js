import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import Index from "views/Index.js";
import Pos from "views/pages/Pos/Index.js";
import Login from "views/pages/Login.js";
import About from "views/pages/About.js";
import Register from "views/pages/Pos/Register.js";
import Forgot from "views/pages/Forgot.js";
import HireUs from "views/pages/HireUs.js";
import OurWork from "views/pages/OurWork.js";
import Harga from "views/pages/Pos/Harga.js";
import Project from "views/pages/projects/Project";

function App(){
    return (
        <BrowserRouter>
    <Switch>
    <Route path="/" exact render={props => <Index {...props} />} />
      <Route path="/pos" exact render={props => <Pos {...props} />} />
      <Route
        path="/pos/pricing"
        exact
        render={props => <Harga {...props} />}
      />
      <Route path="/login" exact render={props => <Login {...props} />} />
      <Route
        path="/pos/about"
        exact
        render={props => <About {...props} />}
      />
      <Route
        path="/pos/register"
        exact
        render={props => <Register {...props} />}
      />
      <Route
        path="/pos/forgot"
        exact
        render={props => <Forgot {...props} />}
      />
      <Route
        path="/contact-us"
        exact
        render={props => <HireUs {...props} />}
      />
      <Route
        path="/our-works"
        exact
        render={props => <OurWork {...props} />}
      />

      <Route
        path="/our-works/:slug"
        exact
        render={props => <Project {...props} />}
      />

      <Route
        path="/about"
        exact
        render={props => <About {...props} />}
      />
      <Redirect to="/" />
    </Switch>
  </BrowserRouter>
    )
}

export default App;