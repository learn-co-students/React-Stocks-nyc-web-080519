import React, { Component } from 'react';
import Stock from '../components/Stock'

class PortfolioContainer extends Component {
  stockCards = () => {
    return this.props.portfolio.map(stock => {
      return (
        <Stock 
          stock={stock}
          key={stock.id}
          name={stock.name}
          ticker={stock.ticker}
          price={stock.price}
          type={stock.type}
          handleClick={this.props.sell}
        />
      )
    })
  }

  render() {
    return (
      <div>
        <h2>My Portfolio</h2>
          {this.stockCards()}
      </div>
    );
  }

}

export default PortfolioContainer;
