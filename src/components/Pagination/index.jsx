import React from "react";
import s from "./Pagination.module.css";

const Pagination = ({ currentPage, setCurrentPage, setFetching }) => {
  const onClickNext = () => {
    setFetching(true);
    setCurrentPage(currentPage + 1);
    window.scrollTo(0, 0);
  };
  const onClickPrevious = () => {
    setFetching(true);
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
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
