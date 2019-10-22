import React, { Component } from 'react';
import Stock from '../components/Stock'

class StockContainer extends Component {

  render() {
    console.log(this.props.stocks)
    let stockArray = this.props.stocks.map(stockObj => <Stock key = {stockObj.id} stock={stockObj} clickHandler = {this.props.clickHandler}/>)
    return (
      <div>
        <h2>Stocks</h2>
          {stockArray}
      </div>
    );
  }

}

export default StockContainer;
