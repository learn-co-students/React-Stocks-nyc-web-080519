import React from 'react';
import Stock from '../components/Stock'

const PortfolioContainer = (props) => {
  const getStocks = () => {
    return props.portfolioStocks.map(stock => <Stock key={stock.id} stock={stock} stockClickHandler={props.stockClickHandler} />)
  }

  return (
    <div>
      <h2>My Portfolio</h2>
      {getStocks()}
    </div>
  );
}

export default PortfolioContainer;
