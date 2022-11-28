import React from "react";
import WeatherCard from "./WeatherCard";

const WeatherBox = ({ weather, imageURL }) => {
  const weatherMap = {
    hot: "https://cdn.britannica.com/10/152310-050-5A09D74A/Sand-dunes-Sahara-Morocco-Merzouga.jpg",
    cold: "https://cdn.britannica.com/07/152307-050-6FD0D3EE/Iceberg-waters-Antarctica.jpg",
    warm: "https://www.gannett-cdn.com/presto/2019/12/04/USAT/b5c10ad6-a6e2-4111-8dc6-2720df416f5a-6-st-lucia.jpg?crop=1933,1087,x813,y5&width=1933&height=1087&format=pjpg&auto=webp",
  };



  const weatherTemp = Math.round(weather.main.temp);
  let weatherSwitch = "";

  if (weatherTemp <= 5) {
    weatherSwitch = "cold";
  } else if (weatherTemp < 15 && weatherTemp > 5) {
    weatherSwitch = "warm";
  } else {
    weatherSwitch = "hot";
  }

  return (
    <>
      <div className="flex flex-col items-center justify-center">
        <div className="flex items-center justify-center mt-40">
          <WeatherCard imageURL={imageURL} weather={weather} />
        </div>
        <h1 className="mt-2 text-3xl font-bold">
          {weather.name}, {weather.sys.country}
        </h1>
        <h1 className="mt-2 text-3xl text-teal-300 font-bold">
          {weather.weather[0].main}
        </h1>
      </div>
    </>
  );
};

export default WeatherBox;
