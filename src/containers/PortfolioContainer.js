import React, { Component } from 'react';
import Stock from '../components/Stock'

class PortfolioContainer extends Component {

  render() {
    let myList = this.props.myStocks.map(stockObj => <Stock key = {stockObj.id} stock={stockObj} clickHandler={this.props.clickHandler}/>)
    return (
      <div>
        <h2>My Portfolio</h2>
        {myList}
      </div>
    );
  }

}

export default PortfolioContainer;
