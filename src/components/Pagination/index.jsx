import React from "react";
import s from "./Pagination.module.css";
import { useSelector, useDispatch } from "react-redux";
import { setCurrentPage } from "../../redux/slices/newsSlice";

const Pagination = () => {
  const dispatch = useDispatch();
  const currentPage = useSelector((state) => state.newsReducer.currentPage);
  const onClickNext = () => {
    dispatch(setCurrentPage(currentPage + 1));
    window.scrollTo(0, 0);
  };
  const onClickPrevious = () => {
    if (currentPage > 1) {
      dispatch(setCurrentPage(currentPage - 1));
    }
    window.scrollTo(0, 0);
  };

  return (
    <div className={s.root}>
      <button className={s.btn} onClick={onClickPrevious}>
        Previous
      </button>
      <div className={s.currentPage}>{currentPage}</div>
      <button className={s.btn} onClick={onClickNext}>
        Next
      </button>
    </div>
  );
};

export default Pagination;
