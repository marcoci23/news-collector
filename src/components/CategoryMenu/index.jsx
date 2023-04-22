import React from "react";
import s from "./CategoryMenu.module.css";
import { useDispatch, useSelector } from "react-redux";
import { setCategory } from "../../redux/slices/categoriesSlice";
import { setCurrentPage } from "../../redux/slices/newsSlice";

const categoryName = [
  "general",
  "world",
  "nation",
  "business",
  "technology",
  "entertainment",
  "sports",
  "science",
  "health",
];

const CategoryMenu = () => {
  const dispatch = useDispatch();
  const activeCategory = useSelector(
    (state) => state.categoryReducer.activeCategory
  );

  const onClickCategory = (idx) => {
    dispatch(setCategory(categoryName[idx]));
    dispatch(setCurrentPage(1));
    // activeCategory != categoryName[idx] && setStatus("loading");
    // console.log(activeCategory, categoryName[idx]);
  };

  return (
    <div className={s.categoryMenu}>
      {categoryName.map((el, idx) => (
        <button
          key={idx}
          className={`${s.btn} ${
            activeCategory == categoryName[idx] ? s.active : ""
          }`}
          onClick={() => onClickCategory(idx)}
        >
          {el}
        </button>
      ))}
    </div>
  );
};

export default CategoryMenu;
