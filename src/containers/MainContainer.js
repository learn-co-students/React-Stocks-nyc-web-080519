import React, { Component } from 'react';
import StockContainer from './StockContainer'
import PortfolioContainer from './PortfolioContainer'
import SearchBar from '../components/SearchBar'
// import { runInThisContext } from 'vm';

class MainContainer extends Component {
  state = {
    stocks: [],
    displayStocks: [],
  }

  // Render all the stocks onto the page. 
  componentDidMount() {
    this.fetchStocks()
  }

  fetchStocks = () => {
    fetch("http://localhost:6969/stocks")
    .then(resp => resp.json())
    .then(stocks => {
      let updatedStocks = stocks.map(stock => ({...stock, portfolio: false}))
      this.setState({
        stocks: updatedStocks, 
        displayStocks: updatedStocks
      
      })
    })
  }

  addToPortfolio = (stock) => {
    let stocksCopy = [...this.state.stocks];
    stock.portfolio = true;
    this.setState({stocks: stocksCopy})
  }

  removeFromPortfolio = (stock) => {
    let stocksCopy = [...this.state.stocks];
    stock.portfolio = false;
    this.setState({stocks: stocksCopy})
  }

  portfolioStocks = () => {
    return this.state.stocks.filter(stock => stock.portfolio)
  }

  //seems like browser won't let the radio to be deselected once clicked???
  sortStocks = (e) => {
    if (e.target.value === "Alphabetically") {
      this.setState({alpha: !this.state.alpha})
      this.alphaStocks()
    } else if (e.target.value === "Price") {
      this.setState({price: !this.state.price})
      this.priceStocks()
    }
  }

  filterStocks = (type) => {
    if (type !== "All") {
      this.setState({
        displayStocks: this.state.stocks.filter(stock => stock.type === type)        
      })
    } else {
      this.setState({
        displayStocks: this.state.stocks
      })
    }
  }

  sortStocks = (sortBy) => {
    let sortedStocks = []

    if (sortBy === "Alphabetically") {
      sortedStocks = this.state.displayStocks.sort((a, b) => {
        let x = a.name.toLowerCase()
        let y = b.name.toLowerCase()
        return x < y ? -1 : 1
      })
    } else if (sortBy === "Price") {
      sortedStocks = this.state.displayStocks.sort((a,b) => a.price < b.price ? -1 : 1)
    }
    this.setState({
      displayStocks: sortedStocks
    })
  }
  

  render() {
    console.log("state", this.state)
    return (
      <div>
        <SearchBar sortStocks={this.sortStocks} filterStocks={this.filterStocks} />

          <div className="row">
            <div className="col-8">

              <StockContainer stocks={this.state.displayStocks} addToPortfolio={this.addToPortfolio} />

            </div>
            <div className="col-4">

              <PortfolioContainer stocks={this.portfolioStocks()} removeFromPortfolio={this.removeFromPortfolio}/>

            </div>
          </div>
      </div>
    );
  }

}

export default MainContainer;
