import React, { useEffect } from "react";
import WeatherBar from "../components/WeatherBar";
import s from "./NewsPage.module.css";
import TopHeadlines from "../components/TopHeadlines";
import Footer from "../components/Footer";

export const LanguageContext = React.createContext("en");
export const FetchingContext = React.createContext(true);

const NewsPage = () => {
  return (
    <div className={s.newsPage}>
      <div className={s.content}>
        <WeatherBar />
        <div className={s.logo}>
          <div className={s.title}>NEWS COllECTOR</div>
          <div className={s.subtitle}>
            Current and historic news articles published by over 60,000 sources
          </div>
        </div>
        <TopHeadlines />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default NewsPage;
