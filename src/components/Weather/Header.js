import React from "react";
import SearchInput from "./SearchInput";
import { Link } from "react-router-dom";
import "./header.css";

const Header = ({ setFetching, city, setCity }) => {
  return (
    <div className="header-container">
      <Link to="/" className="back-button">
        Back
      </Link>
      <div className="header">
        <h1 className="header_title">Weather</h1>
        <div className="search-container">
          <SearchInput city={city} setCity={setCity} />
          <button onClick={() => setFetching(true)} className="search-button">
            Search
          </button>
        </div>
      </div>
    </div>
  );
};
export default Header;
