import React, { Component } from 'react';
import Stock from '../components/Stock'


// allow a user to buy a stock by clicking on it and when it is bought, it should be added to My Portfolio.

class PortfolioContainer extends Component {
  render() {
    let userStocksArr = (this.props.stocks.length > 0) ? (this.props.stocks.map(stock => <Stock key={stock.id} stock={stock} removeStock={this.props.removeStock} />)) : null
    return (
      <div>
        <h2>My Portfolio</h2>
          {
            userStocksArr
          }
      </div>
    );
  }

}

export default PortfolioContainer;
