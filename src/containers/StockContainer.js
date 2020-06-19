import React, { Component } from 'react';
import Stock from '../components/Stock'

const StockContainer = (props) => {


  const renderStocks = () => {
    return props.displayStocks.map(stock => 
     <Stock 
        stockSelection={props.stockSelection}
        key={stock.id}
        stock={stock}
        ticker={stock.ticker}
        name={stock.name}
        type={stock.type}
        price={stock.price}
      />
    )
  }

    return (
      <div>
        <h2>Stocks</h2>
        { renderStocks() }
      </div>
    );


}

export default StockContainer;
