import React from "react";
import ReactAnimatedWeather from "react-animated-weather";
export default function WeatherIcon(props) {
  if (props.data === "01d") {
    return (
      <ReactAnimatedWeather
        icon="CLEAR DAY"
        color="red"
        size={64}
        animate={true}
      />
    );
  } else {
    return (
      <ReactAnimatedWeather
        icon="CLEAR NIGHT"
        color="red"
        size={64}
        animate={true}
      />
    );
  }
}
