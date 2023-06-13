import "./App.css";
import Header from "./Header";
import Info from "./Info";
import React, { useEffect, useRef } from "react";
import Item from "./Item";

const API_KEY = "b9b52b7cae0f713be77573ff04ebe52b";
const Weather = () => {
  const [info, setInfo] = React.useState("");
  const [city, setCity] = React.useState("");
  const [error, setError] = React.useState(false);
  const [fetching, setFetching] = React.useState(false);

  useEffect(() => {
    if (fetching) {
      const getData = async () => {
        await fetch(
          `http://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&cnt=40&appid=${API_KEY}`
        )
          // .then((data) => data.json())
          // .then((data) => setInfo(data))
          // .then(setFetching(false))
          // .then(setCity(""));
          .then((data) => data.json())
          .then((data) => {
            if (data.cod != 200) {
              setError(true);
              setCity("");
            } else {
              setError(false);
              setFetching(false);
              setInfo(data);
            }
          });
      };
      getData();
    }
    console.log(info);
  }, [fetching]);

  return (
    <div className="App">
      <div className="main">
        <Header city={city} setCity={setCity} setFetching={setFetching} />
        {info ? (
          <Info
            info={info.city}
            cod={info.cod}
            error={error}
            setError={setError}
          />
        ) : (
          <div className="info_loader">5 day weather forecast</div>
        )}
        <div className="items">
          {info
            ? info.list.map((i, idx) => (
                <Item
                  key={idx}
                  date={i.dt_txt}
                  temp={i.main}
                  weather={i.weather[0].description}
                  humidity={i.main.humidity}
                  icon={i.weather[0].icon}
                />
              ))
            : ""}
        </div>
      </div>
    </div>
  );
};
export default Weather;
