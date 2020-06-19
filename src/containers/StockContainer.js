import React, { Component } from 'react';
import Stock from '../components/Stock'

class StockContainer extends Component {

  sortStocks = () => {
    let sortedStocks = this.props.stocks
    if (this.props.alphabetically === false && this.props.price === false) {
      return this.stockMapper(sortedStocks)
    }
    else if (this.props.alphabetically) {
      sortedStocks = this.props.stocks.sort((a,b) => a.name > b.name ? 1 : -1)
      return this.stockMapper(sortedStocks)
    }
    else if (this.props.price) {
      sortedStocks = this.props.stocks.sort((a,b) => a.price > b.price ? 1 : -1)
      return this.stockMapper(sortedStocks)
    }
  }

  stockMapper = (sortedStocks) => {
    return sortedStocks.map((stock) => {
      if (stock.type === this.props.filter) {
        return <Stock key={stock.id} stock={stock} changePortfolio={this.props.changePortfolio} />
      }
    })
  }

  render() {
    return (
      <div>
        <h2>Stocks</h2>
        {
          //render the list of stocks here
          this.sortStocks()
        }
      </div>
    );
  }

}

export default StockContainer;
