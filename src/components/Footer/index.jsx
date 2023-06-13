import React from "react";
import s from "./Footer.module.css";

const Footer = () => {
  return (
    <div className={s.root}>
      <div className={s.content}>
        <div className={s.git}>
          Github
          <a href="https://github.com/marcoci23/news-collector">
            news-collector
          </a>
        </div>
        <div className={s.logo}>
          <span>NEWS COllECTOR</span>
        </div>
      </div>
      <div className={s.link}>newscollector.vercel.app</div>
    </div>
  );
};

export default Footer;
