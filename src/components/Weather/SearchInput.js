import React from "react";
import "./form.css";

const SearchInput = ({ city, setCity }) => {
  return (
    <div>
      <input
        value={city}
        onChange={(e) => setCity(e.target.value)}
        placeholder="city"
        className="search-input"
      ></input>
    </div>
  );
};
export default SearchInput;
