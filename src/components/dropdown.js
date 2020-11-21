import React from "react";
import { connect } from "react-redux";

import { changeCityCreator } from "../store/reducers/setCity-reducer";

const DropDown = ({ changeCityCreator }) => {
  return (
    <div onClick={() => changeCityCreator()} className="dropdown__container">
      <i class="fas fa-redo-alt"></i>
    </div>
  );
};

export default connect(null, { changeCityCreator })(DropDown);
