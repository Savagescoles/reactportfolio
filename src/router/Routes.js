import React from "react";
import mainframe from "../views/home/mainframe";
import NotFound from "../views/NotFound";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ScrollTopBehaviour from "../components/ScrollTopBehaviour";

const Routes = () => {
  return (
    <>
      <Router>
        <ScrollTopBehaviour />
        <Switch>
          <Route exact path="/aperture" component={mainframe} />
          <Route component={NotFound} />
        </Switch>
      </Router>
    </>
  );
};

export default Routes;