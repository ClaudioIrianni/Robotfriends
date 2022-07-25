import React from "react";

const SearchBox = ({searchfield, searchChange}) => {
  return (
    <div className="pa2">
      <input
        className="pa3 ba b--gren bg-lightest-blue"
        type="search"
        placeholder="search robot"
        onChange={searchChange}
      ></input>
    </div>
  );
};

export default SearchBox;
