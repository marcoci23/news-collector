import React from "react";
import s from "./LanguageMenu.module.css";
import { FetchingContext, LanguageContext } from "../../pages/NewsPage";

export const LanguageMenu = () => {
  const { lang, setLang, setCurrentPage } = React.useContext(LanguageContext);
  const { setFetching } = React.useContext(FetchingContext);
  const [open, setOpen] = React.useState(false);
  const langList = [
    { name: "en", label: "English" },
    { name: "ro", label: "Romanian" },
    { name: "ru", label: "Russian" },
  ];
  const onClickLang = (idx) => {
    setFetching(true);
    setLang(langList[idx].name);
    setOpen(false);
    setCurrentPage(1);
  };

  return (
    <div className={s.languageMenu}>
      <div onClick={() => setOpen(!open)}>Language: {lang}</div>
      <div className={s.languages}>
        {open &&
          langList.map((el, idx) => (
            <div onClick={() => onClickLang(idx)} key={idx}>
              {el.label}
            </div>
          ))}
      </div>
    </div>
  );
};

export default LanguageMenu;
