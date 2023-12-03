import React from "react";
import FormattedDate from "./FormattedDate.js";
import WeatherIcon from "./WeatherIcon";
export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <div className="row">
        <div className="col-6">
          <h1>{props.data.city}</h1>

          <ul>
            <li className="text-capitalize">
              <FormattedDate date={props.data.date} />, {props.data.description}
            </li>
            <li>
              Humidity: {Math.round(props.data.humidity)} % , Wind:{" "}
              {Math.round(props.data.wind)} km/h
            </li>
          </ul>
        </div>
        <div className="col-lg-6 col-md-6 col-sm-8">
          <div className=" temperature-container d-flex justify-content-end">
            <div className="float-left">
               <img code={props.icon} /> 
            </div>

            <div>
              <span className="temperature">
                {Math.round(props.data.temperature)}
              </span>
              <span className="unit">°C</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
