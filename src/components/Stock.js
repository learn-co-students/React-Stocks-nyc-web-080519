import React from 'react'

const Stock = (props) => {
  const clickStock = () => {
    props.stockClickHandler(props.stock)
  }

  return (
    <div>
      <div className="card" onClick={clickStock}>
        <div className="card-body">
          <h5 className="card-title">{props.stock.name}</h5>
          <p className="card-text">
            {props.stock.ticker}: {props.stock.price}
          </p>
        </div>
      </div>
    </div>
  )
};

export default Stock
