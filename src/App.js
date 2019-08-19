import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import Index from "views/Index.js";
import Landing from "views/pages/Landing.js";
import Login from "views/pages/Login.js";
import About from "views/pages/About.js";
import Register from "views/pages/Register.js";
import HireUs from "views/pages/HireUs.js";
import OurWork from "views/pages/OurWork.js";
import Harga from "views/pages/Harga.js";

function App(){
    return (
        <BrowserRouter>
    <Switch>
      <Route path="/" exact render={props => <Landing {...props} />} />

      <Route
        path="/pricing"
        exact
        render={props => <Harga {...props} />}
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
  </BrowserRouter>
    )
}

export default App;