import React from "react-redux";
import { HashRouter, Route } from "react-router-dom";
import Dashbord from "../components/Dashbord";

import Home from "../page/Home";
import SetCity from "../page/setCity";

const AppRouter = () => (
  <HashRouter>
    <Route path="/" exact component={Home} />
    <Route path="/setcity" component={SetCity} />
    <Route path="/dashbord" component={Dashbord} />
  </HashRouter>
);

export default AppRouter;
