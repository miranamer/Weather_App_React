import { hasSelectionSupport } from "@testing-library/user-event/dist/utils";
import { useEffect, useState } from "react";
import DateBox from "./components/DateBox";
import WeatherBox from "./components/WeatherBox";
import WeatherCard from "./components/WeatherCard";

function App() {
  const api = {
    key: "8afe291d090979a1805a6028ecb0b15d",
    base: "https://api.openweathermap.org/data/2.5/",
    photos: "AIzaSyDN04xeX80LoYBjwOS1MEVqQLeNB6uEhnw",
  };

 

  const [search, setSearch] = useState("");
  const [boxClose, setBoxClose] = useState(true);
  const [weather, setWeather] = useState({});
  const [city, setCity] = useState();
  const [cityImg, setCityImg] = useState("");

  const photosAPI = `https://maps.googleapis.com/maps/api/place/autocomplete/json?input=Paris&types=geocode&key=${api.photos}`;

  const handleSearch = async () => {
    //if (e.key === "Enter")
    await fetch(`${api.base}weather?q=${search}&units=metric&APPID=${api.key}`)
      .then((res) => res.json())
      .then((result) => {
        setWeather(result);
      });
  };

  const handleSearch2 = async () => {
    setCityImg("");
    await fetch(
      `https://api.teleport.org/api/urban_areas/slug:${search}/images/`
    )
      .then((res) => res.json())
      .then((result) => {
        setCity(setCityImg(result["photos"][0]["image"]["web"]));
      });
    handleSearch();
    setSearch("");
  };

  const dates = (d) => {
    var months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];

    var days = [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday",
    ];

    let day = days[d.getDay()];
    let month = months[d.getMonth()];
    let date = d.getDate();
    let year = d.getFullYear();

    return `${day} ${date} ${month} ${year}`;
  };

  return (
    <>
      <div className="text-white m-0 p-0 bg-[url('../src/assets/img.jpg')] bg-cover bg-no-repeat bg-center w-full h-screen">
        <div className="flex justify-center">
          <h1 className="fixed top-4 left-8 text-3xl text-white">
            Weather <span className="text-green-300">Check</span>{" "}
          </h1>
          <input
            onChange={(e) => setSearch(e.target.value)}
            type="text"
            placeholder="Enter a city..."
            className="input input-bordered input-info w-[500px] mt-5 shadow-xl"
            value={search}
          />

          <button
            onClick={handleSearch2}
            className="btn btn-outline btn-success mt-5 ml-4"
          >
            Submit
          </button>


          <h1 className="fixed bottom-4 right-10 text-2xl">Created By - Miran Amer</h1>
        </div>

        {typeof weather.main != "undefined" && cityImg != "" ? (
          <WeatherBox imageURL={cityImg} weather={weather} />
        ) : null}

        {boxClose === true ? (
          <DateBox
            dates={dates}
            boxClose={boxClose}
            setBoxClose={setBoxClose}
          />
        ) : (
          <div
            onClick={() => setBoxClose(!boxClose)}
            className="cursor-pointer fixed bottom-4 left-4 badge badge-success gap-2"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="inline-block w-4 h-4 stroke-current"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              ></path>
            </svg>
            Open
          </div>
        )}
      </div>
    </>
  );
}

export default App;
