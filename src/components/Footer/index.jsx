import React from "react";
import s from "./Footer.module.css";

const Footer = () => {
  return (
    <div className={s.root}>
      <div className={s.content}>
        <div className={s.git}>Github</div>
        <div className={s.logo}>
          <span>NEWS COllECTOR</span>
        </div>
        <div className={s.siteMap}>
          <span>Site map</span>
          <span>Top-Headlines news</span>
          <span>Weather</span>
        </div>
      </div>
      <div className={s.link}>newscollector.vercel.app</div>
    </div>
  );
};

export default Footer;
