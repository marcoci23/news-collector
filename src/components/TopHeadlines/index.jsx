import React from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import NewsIntem from "../NewsItem";
import CategoryMenu from "../CategoryMenu";
import Pagination from "../Pagination";
import axios from "axios";
import ContentLoader from "react-content-loader";
import s from "./Loader.module.css";

const TopHeadlines = ({ lang, currentPage, setCurrentPage }) => {
  const [news, setNews] = React.useState([]);
  const [fetching, setFetching] = React.useState(true);

  const category = useSelector((state) => state.categoryReducer.category);

  useEffect(() => {
    axios
      .get(
        `https://gnews.io/api/v4/top-headlines?category=${category}&lang=${lang}&max=5&page=${currentPage}&expand=content&apikey=87cf4570610511f989f344bbabc8cc1f`
      )
      .then((response) => {
        setNews(response.data.articles);
        setFetching(false);
      });
  }, [currentPage, category, lang]);

  // useEffect(() => {
  //   document.addEventListener("scroll", scrollHandler);

  //   return function () {
  //     document.removeEventListener("scroll", scrollHandler);
  //   };
  // }, []);

  // const scrollHandler = (e) => {
  //   if (
  //     e.target.documentElement.scrollHeight -
  //       (e.target.documentElement.scrollTop + window.innerHeight) <
  //     100
  //   ) {
  //     setFetching(true);
  //   }
  // };

  return (
    <div>
      <CategoryMenu setFetching={setFetching} setCurrentPage={setCurrentPage} />

      {news.map((item, idx) =>
        fetching == false ? (
          <NewsIntem idx={idx} key={idx} news={item} />
        ) : (
          <ContentLoader
            className={s.loader}
            rtl
            speed={2}
            width={1200}
            height={250}
            viewBox="0 0 1200 250"
            backgroundColor="#333333"
            foregroundColor="#494955"
          >
            <rect x="0" y="0" rx="10" ry="10" width="1200" height="250" />
          </ContentLoader>
        )
      )}
      <Pagination
        setFetching={setFetching}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </div>
  );
};

export default TopHeadlines;
