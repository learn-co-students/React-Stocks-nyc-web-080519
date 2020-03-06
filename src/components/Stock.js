import React from 'react'

const Stock = props => (
  <div onClick={event => props.handleClick(props.stock)}>

    <div className="card">
      <div className="card-body">
        <h5 className="card-title">{props.name}</h5>
        <p className="card-text">{props.ticker}: {props.price}</p>
      </div>
    </div>    


  </div>
);

export default Stock


// needs company name
// needs ticker
// needs stockprice