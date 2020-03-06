import React, { Component } from 'react';
import Stock from '../components/Stock'

class StockContainer extends Component {
  stockCards = () => {
    return this.props.stocks.map(stock => {
      return (
        <Stock 
          stock={stock}
          key={stock.id}
          name={stock.name}
          ticker={stock.ticker}
          price={stock.price}
          type={stock.type}
          handleClick={this.props.buy}
        />
      )
    })
  }

  
  render() {
    return (
      <div>
        <h2>Stocks</h2>
        {this.stockCards()}
      </div>
    );
  }

}

export default StockContainer;
