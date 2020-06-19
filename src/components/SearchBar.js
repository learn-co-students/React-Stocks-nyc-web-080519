import React from 'react';

const SearchBar = (props) => {

  const changeHandler = (e) => {
    props.sortSelection(e.target.value)
  }

  const filterChangeHandler = (e) => {
    props.filterType(e.target.value)
  }

  return (
    <div>

      <strong>Sort by:</strong>
      <label>
        <input type="radio" value="Alphabetically" checked={null} onChange={changeHandler}/>
        Alphabetically
      </label>
      <label>
        <input type="radio" value="Price" checked={null} onChange={changeHandler}/> 
        Price
      </label>
      <br/>

      <label>
        <strong>Filter:</strong>
        <select onChange={filterChangeHandler}>
          <option value="All">All</option>
          <option value="Tech">Tech</option>
          <option value="Sportswear">Sportswear</option>
          <option value="Finance">Finance</option>
        </select>
      </label>


    </div>
  );
}


export default SearchBar;
