import React from "react";
import { Link } from "react-router-dom";
import s from "./WeatherBar.module.css";
import LanguageMenu from "../LanguageMenu";

const WeatherBar = () => {
  return (
    <div className={s.bar}>
      <div className={s.weather}>
        <Link to={"/weather"} className={s.weather}>
          Weather
        </Link>
      </div>
      <div className={s.language}>
        <LanguageMenu />
      </div>
    </div>
  );
};

export default WeatherBar;
