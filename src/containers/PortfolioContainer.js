import React, { Component } from 'react';
import Stock from '../components/Stock'

const PortfolioContainer = (props) => {

  const renderPortStock = () => {
    return props.portfolioStocks.map(stock => <Stock
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
      <h2>My Portfolio</h2>
        {
          renderPortStock()
          //render your portfolio stocks here
        }
    </div>
  );

}

export default PortfolioContainer;
