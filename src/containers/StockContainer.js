import React from 'react';
import Stock from '../components/Stock'

const StockContainer = (props) => {
  const getStocks = () => {
    return props.stocks.map(stock => <Stock key={stock.id} stock={stock} stockClickHandler={props.stockClickHandler} />)
  }

  return (
    <div>
      <h2>Stocks</h2>
      {getStocks()}
    </div>
  );
}

export default StockContainer;
