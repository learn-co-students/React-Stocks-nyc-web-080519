import React, { Component } from 'react';
import Stock from '../components/Stock'

class StockContainer extends Component {

  
  render() {
    
    console.log("this.props.allStocksArr from StockContainer: ", this.props.allStocksArr)
    let stock = this.props.allStocksArr.map(stock => { return <Stock key={stock.id} stockObj={stock} clickHandler={this.props.purchaseStock} />})
    return (
      <div>
        <h2>Stocks</h2>
        {
          stock
        }
      </div>
    );
  }

}

export default StockContainer;
