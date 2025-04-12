import React from "react";
import "./SearchBar.css";

const SearchBar = ({ onSearch }) => {
  return (
    <div className="search-bar-container">
      <input
        type="text"
        placeholder="Search by name, phone, or email..."
        onChange={e => onSearch(e.target.value)}
        className="search-bar-input"
      />
    </div>
  );
};

export default SearchBar;
