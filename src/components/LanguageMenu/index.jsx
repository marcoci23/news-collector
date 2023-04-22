import React from "react";
import s from "./LanguageMenu.module.css";
import { useDispatch, useSelector } from "react-redux";
import { setLang } from "../../redux/slices/languageSlice";
import { setCurrentPage } from "../../redux/slices/newsSlice";

export const LanguageMenu = () => {
  const dispatch = useDispatch();
  const lang = useSelector((state) => state.languageReducer.lang);
  const [open, setOpen] = React.useState(false);
  const langList = [
    { name: "en", label: "English" },
    { name: "ro", label: "Romanian" },
    { name: "ru", label: "Russian" },
    { name: "de", label: "German" },
    { name: "fr", label: "French" },
    { name: "es", label: "Spanish" },
  ];
  const onClickLang = (idx) => {
    dispatch(setLang(langList[idx].name));
    dispatch(setCurrentPage(1));
    setOpen(false);
  };
  return (
    <div className={s.languageMenu}>
      <div onClick={() => setOpen(!open)}>Language: {lang}</div>

      {open && (
        <div className={s.languages}>
          {langList.map((el, idx) => (
            <div className={s.item} onClick={() => onClickLang(idx)} key={idx}>
              {el.label}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default LanguageMenu;
