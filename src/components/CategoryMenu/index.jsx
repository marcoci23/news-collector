import React from "react";
import s from "./CategoryMenu.module.css";
import { useDispatch } from "react-redux";
import { setCategory } from "../../redux/categoriesSlice";

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

const CategoryMenu = ({ setCurrentPage, setFetching }) => {
  const [activeCategory, setActiveCategory] = React.useState(0);

  const dispatch = useDispatch();

  const onClickCategory = (idx) => {
    dispatch(setCategory(categoryName[idx]));
    setActiveCategory(idx);
    setCurrentPage(1);
    setFetching(true);
  };

  return (
    <div className={s.categoryMenu}>
      {categoryName.map((el, idx) => (
        <button
          key={idx}
          className={`${s.btn} ${activeCategory == idx ? s.active : ""}`}
          onClick={() => onClickCategory(idx)}
        >
          {el}
        </button>
      ))}
    </div>
  );
};

export default CategoryMenu;
