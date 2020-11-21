import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

import Dashbord from "../components/Dashbord";

const Home = ({ currentCity }) => (
  <div>
    {!currentCity.length && <Redirect to="/setcity" />}
    <Dashbord />
  </div>
);

const mapStateToProps = ({ currentCity }) => ({ currentCity });

export default connect(mapStateToProps)(Home);
