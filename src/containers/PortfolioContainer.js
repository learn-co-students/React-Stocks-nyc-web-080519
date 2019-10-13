import React, { Component } from 'react';
import Stock from '../components/Stock'

class PortfolioContainer extends Component {

  portfolioMapper = () => {
    return this.props.portfolio.map((stock) => {
      return <Stock stock={stock} changePortfolio={this.props.changePortfolio} />
    })
  }

  render() {
    return (
      <div>
        <h2>My Portfolio</h2>
          {
            //render your portfolio stocks here
            this.portfolioMapper()
          }
      </div>
    );
  }

}

export default PortfolioContainer;
