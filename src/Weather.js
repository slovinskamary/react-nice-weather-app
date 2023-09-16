import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";
export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });

  function handleResponse(response) {
    setWeatherData({
      ready: true,
      temperature: response.data.temperature.current,
      humidity: response.data.temperature.humidity,
      date: "Wednesday 16:58",
      description: response.data.condition.description,
      iconUrl:
        "http://shecodes-assets.s3.amazonaws.com/api/weather/icons/scattered-clouds-day.png",
      wind: response.data.wind.speed,
      city: response.data.city,
    });
  }
  if (weatherData.ready) {
    return (
      <div className="Weather">
        <form>
          <div className="row">
            <div className="col-9">
              <input
                type="search"
                placeholder="Enter the city "
                className="form-control search-input"
                autoFocus="on"
              />
            </div>
            <div className="col-3">
              <input
                type="submit"
                value="Search"
                className="btn btn-primary w-100"
              />
            </div>
          </div>
        </form>
        <div className="row">
          <div className="col-6">
            <h1>{weatherData.city}</h1>

            <ul>
              <li className="text-capitalize">
                {weatherData.date}, {weatherData.description}
              </li>
              <li>
                Humidity: {Math.round(weatherData.humidity)} % , Wind:{" "}
                {Math.round(weatherData.wind)} km/h
              </li>
            </ul>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-8">
            <div className=" temperature-container d-flex justify-content-end">
              <img
                src={weatherData.iconUrl}
                //http://shecodes-assets.s3.amazonaws.com/api/weather/icons/clear-sky-day.png
                alt={weatherData.description}
                width="100"
                height="100"
                id="icon"
              />
              <div>
                <span className="temperature">
                  {Math.round(weatherData.temperature)}
                </span>
                <span className="unit">°C</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = "6386t474boab7bcc72baacb6f7e93a05";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${props.defaultCity}&key=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
    return "Loading...";
  }
}
