import React from "react";
import s from "./NewsItem.module.css";

export const NewsIntem = ({ news }) => {
  const [expand, setExpand] = React.useState(false);
  const expandContent = () => {
    setExpand(!expand);
  };

  return (
    <>
      <div onClick={() => expandContent()} className={s.newsItem}>
        <div>
          <img className={s.img} src={news.image} alt="image" />
        </div>
        <div className={s.content}>
          <span className={s.title}>{news.title}</span>
          <span>{news.description}</span>

          {/* <a href={news.url}> Source</a> */}
          <span className={s.source}>{news.source.name}</span>
        </div>
      </div>
      {expand && (
        <div className={s.rootExpand}>
          <div className={s.expand} onClick={() => expandContent()}>
            <div>
              <div className={s.expandTime}>{news.publishedAt}</div>
              <div className={s.expandTitle}>{news.title}</div>
              <div className={s.expandImg}>
                <img className={s.imgExp} src={news.image} alt="asdas" />
              </div>
              <div className={s.expandSource}>{news.source.name}</div>
            </div>
            <div className={s.expandContent}>{news.content}</div>
            <div className={s.expandBar}></div>
          </div>
        </div>
      )}
    </>
  );
};

export default NewsIntem;
