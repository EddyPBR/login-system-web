import React from "react";
import { BrowserRouter, Switch, Redirect, Route } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import Register from "./pages/Register";
import Recover from "./pages/Recover";
import EmailSended from "./pages/EmailSended";
import Welcome from "./pages/Welcome";
import Logout from "./pages/Logout";

const Routes: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/login" exact component={Login} />
        <Route path="/profile" exact component={Profile} />
        <Route path="/register" exact component={Register} />
        <Route path="/recover" exact component={Recover} />
        <Route path="/email" exact component={EmailSended} />
        <Route path="/welcome" exact component={Welcome} />
        <Route path="/logout" exact component={Logout} />
        <Redirect to="/" />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
