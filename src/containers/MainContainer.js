import React, { Component } from 'react';
import StockContainer from './StockContainer'
import PortfolioContainer from './PortfolioContainer'
import SearchBar from '../components/SearchBar'

class MainContainer extends Component {

  render() {
    return (
      <div>
        <SearchBar filter={this.props.filter} filterHandler={this.props.filterHandler} radioHandler={this.props.radioHandler} alphabetically={this.props.alphabetically} price={this.props.price} />

          <div className="row">
            <div className="col-8">

              <StockContainer filter={this.props.filter} stocks={this.props.stocks} changePortfolio={this.props.addToPortfolio} alphabetically={this.props.alphabetically} price={this.props.price}/>

            </div>
            <div className="col-4">

              <PortfolioContainer portfolio={this.props.portfolio} changePortfolio={this.props.removeFromPortfolio} />

            </div>
          </div>
      </div>
    );
  }

}

export default MainContainer;
