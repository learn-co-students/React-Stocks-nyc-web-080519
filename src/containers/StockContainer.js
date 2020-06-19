import React, { Component } from 'react';
import Stock from '../components/Stock'

class StockContainer extends Component {
  render() {    
    let stocksArr = (this.props.stocks.length > 0) ? (this.props.stocks.map(stock => <Stock key={stock.id} stock={stock} buyStock={this.props.buyStock} />)) : null
    return (
      <div>
        <h2>Stocks</h2>
        {stocksArr}
      </div>
    );
  }

}

export default StockContainer;
