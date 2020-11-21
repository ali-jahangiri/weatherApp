import React, { useState } from "react";
import { connect } from "react-redux";

import { setCityCreator } from "../store/reducers/setCity-reducer";

import useFetch from "../Hooks/useFetch";

const SetCityForm = ({ setCityCreator, history }) => {
  const [value, setValue] = useState("");
  const [city, setCity] = useState("");
  const { error, response } = useFetch(city);
  const checkValue = (e) => {
    e.preventDefault();
    setCity(value);
  };
  if (response.cod === "200") {
    setCityCreator(response);
    setTimeout(() => {
      history.push("/dashbord");
    }, 1000);
  }

  const classChecker = (base, logic, logicAddion) => {
    const result = [];
    if (error) result.push("border-error");
    if (response.cod === "200") result.push("border-sucssec");
    if (base) result.push(base);
    if (logic) result.push(logicAddion);
    return result.join(" ");
  };
  return (
    <div>
      <form onSubmit={checkValue}>
        <input
          className={classChecker()}
          type="text"
          placeholder="Enter Your City Name"
          onChange={({ target: { value } }) => setValue(value)}
          value={value}
          autoFocus
        />
        <input
          className={classChecker("setcity__submit--btn", value, "btn-disable")}
          type="submit"
          value="Let's Go!"
          disabled={!value || response.cod === "200"}
        />
      </form>
      <span className="setcity__fetch--fail-span">{error}</span>
    </div>
  );
};

export default connect(null, { setCityCreator })(SetCityForm);
