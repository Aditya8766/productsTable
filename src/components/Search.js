import React from "react";
import "./search.scss";

function Search(props) {
  const { handleSearch } = props;
  return (
    <div className="search">
      <input
        type="text"
        name="search"
        placeholder="Search..."
        onChange={(event) => handleSearch(event)}
      />
    </div>
  );
}
export default Search;
