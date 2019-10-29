/*
    Whenever you want to add more pages to your application, all you need to do is declare a route in this file 
    and match it to the component you want to render for that page.
*/

import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "../components/Home";
import ReadExperiences from "../components/ReadExperiences";

export default (
  <Router>
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/read" exact component={ReadExperiences} />
    </Switch>
  </Router>
);