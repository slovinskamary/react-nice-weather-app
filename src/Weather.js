import React from "react";
import "./Weather.css";
export default function Weather() {
  return (
    <div className="Weather">
      <form>
        <div class="row">
          <div class="col-9">
            <input
              type="search"
              placeholder="Enter the city "
              className="form-control search-input"
              autoFocus="on"
            />
          </div>
          <div class="col-3">
            <input
              type="submit"
              value="Search"
              className="btn btn-primary w-100"
            />
          </div>
        </div>
      </form>
      <div class="row">
        <div class="col-6">
          <h1>London</h1>

          <ul>
            <li>Saturday 16:58 , clear sky</li>
            <li>Humidity: 43 % , Wind: 2 km/h</li>
          </ul>
        </div>
        <div class="col-lg-6 col-md-6 col-sm-8">
          <div class=" temperature-container d-flex justify-content-end">
            <img
              src="http://shecodes-assets.s3.amazonaws.com/api/weather/icons/clear-sky-day.png"
              alt="clear sky"
              width="100"
              height="100"
              id="icon"
            />
            <div>
              <span className="temperature">32</span>
              <span className="unit">°C</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
