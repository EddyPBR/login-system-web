import React from "react";
import { BrowserRouter, Switch, Redirect, Route } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Recover from "./pages/Recover";
import EmailSended from "./pages/EmailSended";
import Welcome from "./pages/Welcome";

const Routes: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/login" exact component={Login} />
        <Route path="/recover" exact component={Recover} />
        <Route path="/email" exact component={EmailSended} />
        <Route path="/welcome" exact component={Welcome} />
        <Redirect to="/" />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
