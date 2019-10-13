import React, { Component } from 'react';
import StockContainer from './StockContainer'
import PortfolioContainer from './PortfolioContainer'
import SearchBar from '../components/SearchBar'

const API = 'http://localhost:3000/stocks'

class MainContainer extends Component {

  state = {
    stocks: [],
    portfolioStocks: [],
    displayStocks:[]
  }

  componentDidMount() {
    fetch(API)
      .then(resp => resp.json())
      .then(data => this.setState({ stocks: data }))
  }

  stockSelection = (stock) => {

    let copyPortfolioStocks = [...this.state.portfolioStocks]

    if (copyPortfolioStocks.includes(stock)){
      let stocksRemoved = copyPortfolioStocks.filter(stock => !copyPortfolioStocks.includes(stock))
      this.setState({
        portfolioStocks: stocksRemoved
      })
    } else {
      this.setState({
        portfolioStocks: [...this.state.portfolioStocks, stock]
      })
    }
  }

  sortSelection = (selection) => {
    let copyOfStocks = [...this.state.stocks]
    if(selection === "Alphabetically"){
      let sortedAlphaStocks = copyOfStocks.sort((a, b) => {
        let textA = a.name.toUpperCase();
        let textB = b.name.toUpperCase();
        return (textA < textB) ? -1 : (textA > textB) ? 1 : 0
      })
      this.setState({
        displayStocks: sortedAlphaStocks
      })
    } else if(selection === "Price"){
      let sortedPriceStocks = copyOfStocks.sort((a, b) => {
        return (a.price < b.price) ? -1 : (a.price > b.price) ? 1 : 0
      })
      this.setState({
        displayStocks: sortedPriceStocks
      })
    }
  }

  filterType = (selection) => {

    if(selection!=="All"){
      let filteredStocks = this.state.stocks.filter(stock => stock.type === selection)
      this.setState({
        displayStocks: filteredStocks 
      })
    } else {
      this.setState({
        displayStocks: this.state.stocks
      })
    }

  }

  
  
  render() {
    return (
      <div>
        <SearchBar sortSelection={this.sortSelection} filterType={this.filterType}/>

          <div className="row">
            <div className="col-8">

              <StockContainer 
              stockSelection={this.stockSelection}
              stocks={this.state.stocks} displayStocks={this.state.displayStocks}/>

            </div>
            <div className="col-4">

              <PortfolioContainer portfolioStocks={this.state.portfolioStocks}/>

            </div>
          </div>
      </div>
    );
  }

}

export default MainContainer;
