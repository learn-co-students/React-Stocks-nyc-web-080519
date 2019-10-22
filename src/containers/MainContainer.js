import React, { Component } from 'react';
import StockContainer from './StockContainer'
import PortfolioContainer from './PortfolioContainer'
import SearchBar from '../components/SearchBar'

class MainContainer extends Component {

  state= {
    myStocks: [],
    stocks: [],
    radio: "",
    filter: ""
  }

  componentDidMount = () => {
    fetch("http://localhost:3000/stocks")
    .then (response => response.json())
    .then (data => this.setState({
      stocks: data
    })
    )
  }

  clickHandler = (stock) => {
    let newArray = this.state.myStocks.includes(stock) ? [...this.state.myStocks] : [...this.state.myStocks, stock]
    this.setState({
      myStocks: newArray
    })
  }

  removeHandler = (stock) => {
    let newArray = this.state.myStocks.filter(stockObj => stockObj !== stock)
    this.setState({
      myStocks: newArray
    })
  }

  changeRadio = (event) => {
    console.log(event.target)
    this.setState({
      radio: event.target.value
    })
  }

  updateFilter = (event) => {
    this.setState({
      filter: event.target.value
    })
  }

  render() {
    let sortedStocksArray = []
    if (this.state.radio === "Alphabetically") {
      sortedStocksArray = this.state.stocks.sort((a,b) => (a.name)>(b.name) ? 1 : -1)
    } else if (this.state.radio === "Price") {
        sortedStocksArray = this.state.stocks.sort((a,b) => (a.price) > (b.price) ? 1 : -1)
    }
    else {
      sortedStocksArray = this.state.stocks
    }

    let filteredStocksArr

    if(this.state.filter === "Tech"){
      filteredStocksArr = sortedStocksArray.filter(stock => stock.type === "Tech")
    }
    else if (this.state.filter === "Sportswear"){
      filteredStocksArr = sortedStocksArray.filter(stock => stock.type === "Sportswear")
    }
    else if (this.state.filter === "Finance"){
      filteredStocksArr = sortedStocksArray.filter(stock => stock.type === "Finance")
    } else {
      filteredStocksArr = sortedStocksArray
    }
    return (
      <div>
        <SearchBar state = {this.state} changeRadio = {this.changeRadio} updateFilter = {this.updateFilter}/>

          <div className="row">
            <div className="col-8">

              <StockContainer clickHandler={this.clickHandler} stocks={filteredStocksArr} />

            </div>
            <div className="col-4">

              <PortfolioContainer myStocks={this.state.myStocks} clickHandler = {this.removeHandler}/>

            </div>
          </div>
      </div>
    );
  }

}

export default MainContainer;
