import React, { useEffect } from "react";
import WeatherBar from "../components/WeatherBar";
import s from "./NewsPage.module.css";
import { useSelector } from "react-redux";
import TopHeadlines from "../components/TopHeadlines";
import Footer from "../components/Footer";

export const LanguageContext = React.createContext("en");
export const FetchingContext = React.createContext(true);

const NewsPage = () => {
  const [lang, setLang] = React.useState("en");
  const [currentPage, setCurrentPage] = React.useState(1);
  const [fetching, setFetching] = React.useState(true);
  const searchValue = useSelector((state) => state.searchReducer.value);

  return (
    <div className={s.newsPage}>
      <div className={s.content}>
        <LanguageContext.Provider value={{ lang, setLang, setCurrentPage }}>
          <FetchingContext.Provider value={{ fetching, setFetching }}>
            <WeatherBar />
            <div className={s.logo}>
              <div className={s.title}>NEWS COllECTOR</div>
              <div className={s.subtitle}>
                Current and historic news articles published by over 60,000
                sources
              </div>
            </div>

            <TopHeadlines
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
              lang={lang}
              searchValue={searchValue}
            />
          </FetchingContext.Provider>
        </LanguageContext.Provider>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default NewsPage;
