import React from "react";
import "./Item.css";

const Item = ({ date, temp, weather, humidity, icon }) => {
  const date_format = new Date(date).toLocaleDateString("en-EN", {
    day: "numeric",
    month: "long",
    hour: "numeric",
  });
  const i = `https://openweathermap.org/img/wn/${icon}.png`;
  return (
    <div className="item">
      <p className="item_date">{date_format}</p>
      <div className="item_temp">
        <img src={i}></img>
        <p className="item_temp_info">{Math.round(temp.temp)}°C</p>
      </div>
      <p className="item_description">{weather}</p>
      <div className="item_temp-min-max">
        <p>Humidity: {humidity}%</p>
      </div>
    </div>
  );
};

export default Item;
