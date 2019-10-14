import React from 'react';

const SearchBar = (props) => {
  return (
    <div>
      <strong>Sort by:</strong>
      <label>
        <input type="radio" value="Alphabetically" checked={null} onChange={props.checkboxHandler}/>
        Alphabetically
      </label>
      <label>
        <input type="radio" value="Price" checked={null} onChange={props.checkboxHandler}/>
        Price
      </label>
      <br/>
      <label>
        <strong>Filter:</strong>
        <select onChange={props.filterHandler}>
          <option value="Tech">Tech</option>
          <option value="Sportswear">Sportswear</option>
          <option value="Finance">Finance</option>
        </select>
      </label>
    </div>
  );
}

export default SearchBar;
