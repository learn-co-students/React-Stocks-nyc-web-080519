import React from 'react'

const Stock = (props) => {

  const clickHandler = () => {
    props.stockSelection(props.stock)
  }

  return(
  <div>
      <div className="card" onClick={clickHandler} stock={props.stock} >
      <div className="card-body">
        <h5 className="card-title" >{
            props.name
          }</h5>
        <p className="card-text">{
            props.ticker 
            //ticker: stock price
          }{props.price}</p>
      </div>
    </div>
  </div>
  )

};

export default Stock
