import React from 'react'

const Stock = (props) => {
  let current = props.stock
  return (
    <div>
      <div className="card" onClick={(e) => props.buyStock ? props.buyStock(current) : props.removeStock(current)}>
        <div className="card-body">
          <h5 className="card-title">{
              props.stock.name
            }</h5>
          <p className="card-text">{props.stock.ticker}: ${
              props.stock.price
            }</p>
        </div>
      </div>
    </div>
  )
};

export default Stock
