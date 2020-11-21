import React from "react";
import SetCityForm from "../components/setCityForm";

const SetCity = ({ history }) => (
  <div className="container-fluid">
    <div className="row">
      <div className="setcity__page">
        <div className="col-md-6 col-sm-7 col-lg-7">
          <div className="setcity__wellcome">
            <div className="setcity__intro">
              <h1>Wellcome</h1>
              <p>keep track Weather of your city easily</p>
              <SetCityForm history={history} />
            </div>
          </div>
        </div>
        <div className="col-md-6 col-sm-5 col-lg-5">
          <div className="setcity__box"></div>
        </div>
      </div>
    </div>
  </div>
);
export default SetCity;
