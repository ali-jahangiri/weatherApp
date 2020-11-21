import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import Details from "./details";

const Dashbord = ({ currentCity }) => {
  if (currentCity.length) {
    const { city, list } = currentCity[0];
    return (
      <div className="dashbord">
        <Details city={city} list={list} />
      </div>
    );
  } else return <Redirect to="/setcity" />;
};

const mapStateToProps = ({ currentCity }) => ({ currentCity });

export default connect(mapStateToProps)(Dashbord);
