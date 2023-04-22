import React from "react";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import NewsIntem from "../NewsItem";
import CategoryMenu from "../CategoryMenu";
import Pagination from "../Pagination";
import ContentLoader from "react-content-loader";
import style from "./Loader.module.css";
import s from "./TopHeadlines.module.css";
import { fetchNews } from "../../redux/slices/newsSlice";

const TopHeadlines = () => {
  const dispatch = useDispatch();

  const { news, status, currentPage } = useSelector(
    (state) => state.newsReducer
  );
  const lang = useSelector((state) => state.languageReducer.lang);
  const category = useSelector((state) => state.categoryReducer.activeCategory);

  useEffect(() => {
    dispatch(fetchNews({ currentPage, category, lang }));
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
    <div className={s.root}>
      <CategoryMenu />
      <div className={s.title}>
        Top headlines articles based on the Google News ranking
      </div>

      {news.map((item, idx) =>
        status == "loading" ? (
          <ContentLoader
            key={idx}
            className={style.loader}
            rtl
            speed={2}
            width={1200}
            height={250}
            viewBox="0 0 1200 250"
            backgroundColor="#6363635c"
            foregroundColor="#494955"
            // marginBottom={30}
          >
            <rect x="0" y="0" rx="10" ry="10" width="1200" height="250" />
          </ContentLoader>
        ) : status == "success" ? (
          <NewsIntem idx={idx} key={idx} news={item} />
        ) : (
          <h1>Error</h1>
        )
      )}
      <Pagination />
    </div>
  );
};

export default TopHeadlines;
