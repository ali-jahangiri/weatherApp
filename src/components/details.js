import React from "react";
import DropDown from "./dropdown";

const Details = ({ city, list }) => {
  const { name, country } = city;
  const { main, weather, wind } = list[0];
  return (
    <div className="details_page">
      <div className="container">
        <div className="row">
          <div className="col-md-10 m-auto">
            <div className="details__container">
              <div className="details_city">
                <div className="details__city__box">
                  <p>{name}.</p>
                  <p>{country}</p>
                </div>
                <DropDown />
              </div>
              <div className="row">
                <div className="col-md-12">
                  <div className="details__intro">
                    <p>{weather[0].description}</p>
                  </div>
                </div>
              </div>
              <div className="row my-3">
                <div className="col-md-6">
                  <div className="details_temp">
                    <i class="fa fa-thermometer-half" aria-hidden="true"></i>
                    <div>
                      <h3>Temp</h3>
                      <p>{main.temp}</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="details_wind">
                    <i class="fas fa-wind"></i>
                    <div>
                      <h3>Wind</h3>
                      <p>{wind.speed}</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6">
                  <div className="details__pressure">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      x="0px"
                      y="0px"
                      width="48"
                      height="48"
                      viewBox="0 0 172 172"
                    >
                      <g
                        fill="none"
                        fill-rule="nonzero"
                        stroke="none"
                        stroke-width="1"
                        stroke-linecap="butt"
                        stroke-linejoin="miter"
                        stroke-miterlimit="10"
                        stroke-dasharray=""
                        stroke-dashoffset="0"
                        font-family="none"
                        font-weight="none"
                        font-size="none"
                        text-anchor="none"
                      >
                        <path d="M0,172v-172h172v172z" fill="none"></path>
                        <g fill="#ffffff">
                          <path d="M86,14.33333c-31.57944,0 -57.33333,25.75389 -57.33333,57.33333c0,29.14901 21.95429,53.29331 50.16667,56.84343v14.82324h-57.33333v14.33333h129v-14.33333h-57.33333v-14.82324c28.21237,-3.55012 50.16667,-27.69442 50.16667,-56.84343c0,-31.57944 -25.7539,-57.33333 -57.33333,-57.33333zM86,28.66667c23.83313,0 43,19.16687 43,43c0,23.83313 -19.16687,43 -43,43c-23.83313,0 -43,-19.16687 -43,-43c0,-23.83313 19.16687,-43 43,-43zM102.43294,45.09961l-26.51107,26.51107l10.13411,10.13411l26.51107,-26.51107z"></path>
                        </g>
                      </g>
                    </svg>
                    <div>
                      <h3>Pressure</h3>
                      <p>{main.pressure}</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="details__humidity">
                    <h3>Humidity</h3>
                    <p>{main.humidity}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;

// <p>Max Temp{main.temp_max}</p>
// <p>Min Temp{main.temp_min}</p>
// <p>weather Feels like{main.feels_like}</p>
