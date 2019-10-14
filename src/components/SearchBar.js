import React from 'react';

const SearchBar = (props) => {


  //onChange for the radios needs to update state to true and then checked should derive its value from this.props.alpha/price
  const radioOnChange = (e) => {
    props.sortStocks(e.target.value)
  }

  const filterOnChange = (e) => {
    props.filterStocks(e.target.value)
  }
 
  return (
    <div>

      <strong>Sort by:</strong>
      <label>
        <input type="radio" value="Alphabetically" name="sort" checked={null} onChange={radioOnChange} />
        Alphabetically
      </label>
      <label>
        <input type="radio" value="Price" name="sort" checked={null} onChange={radioOnChange}/>
        Price
      </label>
      <br/>

      <label>
        <strong>Filter:</strong>
        <select onChange={filterOnChange}>
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
