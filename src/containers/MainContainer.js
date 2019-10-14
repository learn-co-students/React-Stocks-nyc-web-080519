import React, { Component } from 'react';
import StockContainer from './StockContainer'
import PortfolioContainer from './PortfolioContainer'
import SearchBar from '../components/SearchBar'
import { timingSafeEqual } from 'crypto';
import { throws } from 'assert';

class MainContainer extends Component {
  state = {
    stocks: [],
    filteredStocks: [],
    portfolio: []
  }

  componentDidMount() {
    fetch("http://localhost:3000/stocks")
    .then(resp => resp.json())
    .then(stocks => this.setState({
      stocks: stocks,
      filteredStocks: stocks
    }))
  }

  stockClickHandler = (stock) => {
    if (!this.state.portfolio.includes(stock)) {
      let newPortfolio = [...this.state.portfolio, stock]
      this.setState({
        portfolio: newPortfolio
      })
    }
  }

  portfolioClickHandler = (stock) => {
    let portfolioCopy = [...this.state.portfolio]
    let newPortfolio = portfolioCopy.filter(portfolioStock => stock.id !== portfolioStock.id)
    this.setState({
      portfolio: newPortfolio
    })
  }

  checkboxHandler = (e) => {
    let filteredStocksCopy = [...this.state.filteredStocks]
    if (e.target.value === "Alphabetically") {
      this.setState({
        filteredStocks: filteredStocksCopy.sort((a,b) => {
          if (a.name < b.name) {
            return -1
          }
          else if (a.name > b.name) {
            return 1
          }
          else {
            return 0
          }
        })
      })
    }
    else if (e.target.value === "Price") {
      this.setState({
        filteredStocks: filteredStocksCopy.sort((a,b) => a.price - b.price)
      })
    }
  }

  filterHandler = (e) => {
    let stocksCopy = [...this.state.stocks]
    let filteredStocks = stocksCopy.filter(stock => stock.type === e.target.value)
    this.setState({
      filteredStocks: filteredStocks,
    })
  }

  render() {
    return (
      <div>
        <SearchBar checkboxHandler={this.checkboxHandler} filterHandler={this.filterHandler} />
          <div className="row">
            <div className="col-8">
              <StockContainer stocks={this.state.filteredStocks} stockClickHandler={this.stockClickHandler} />
            </div>
            <div className="col-4">
              <PortfolioContainer portfolioStocks={this.state.portfolio} stockClickHandler={this.portfolioClickHandler} />
            </div>
          </div>
      </div>
    );
  }
}

export default MainContainer;
