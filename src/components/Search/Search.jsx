import React from "react";
import s from "./Search.module.css";

export const Search = ({ value, setSearchValue, setNewsBy }) => {
  const setting = () => {
    setNewsBy("search");
  };

  return (
    <div>
      <input
        onFocus={() => setting()}
        value={value}
        onChange={(e) => setSearchValue(e.target.value)}
        className={s.searchInput}
        type="text"
        placeholder="Search news"
      />
      <button className={s.searchButton}>Search</button>
    </div>
  );
};

export default Search;
