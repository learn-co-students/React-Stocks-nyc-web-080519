import React from 'react';

const SearchBar = (props) => {

    return (
      <div>
        <strong>Sort by:</strong>
        <label>
          <input type="radio" value="Alphabetically" checked={props.state.radio === "Alphabetically"} onChange={props.changeRadio}/>
          Alphabetically
        </label>
        <label>
          <input type="radio" value="Price" checked={props.state.radio === "Price"} onChange={props.changeRadio}/>
          Price
        </label>
        <br/>
  
        <label>
          <strong>Filter:</strong>
          <select onChange={props.changeFilter}>
            <option value="">All</option>
            <option value="Tech">Tech</option>
            <option value="Sportswear">Sportswear</option>
            <option value="Finance">Finance</option>
          </select>
        </label>
      </div>
    ) // ends Return
}


export default SearchBar;
