import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./SearchBar.css";

function SearchBar() {
  const [searchBar, setSearchBar] = useState();

  const onInputChange = (event) => {
    setSearchBar(event.target.value);
  };

  return (
    <div className="searchBar">
      <input
        name="searchBar"
        type="text"
        value={searchBar}
        onChange={onInputChange}
      />
      <Link to={`/search/${searchBar}`}>
        <button className="search-button" type="button">
          Find me food !
        </button>
      </Link>
    </div>
  );
}

export default SearchBar;
