import React, { Component } from 'react';
import StockContainer from './StockContainer'
import PortfolioContainer from './PortfolioContainer'
import SearchBar from '../components/SearchBar'

class MainContainer extends Component {

  state = {
    allStocks: [],
    ownedStocks: [],
    filter: "",
    radio: ""
  }

  componentDidMount() {
    this.fetchStocks()
  }

  fetchStocks = () => {
    fetch("http://localhost:3000/stocks")
    .then( resp => resp.json())
    .then( data => 
      this.setState({
        allStocks: data
      }))
  }// ends fetchStocks function

  changeRadio = (event) => {
    this.setState({
      radio: event.target.value
    })
  } // ends changeRadio listener


  changeFilter = (event) => {
    this.setState({
      filter: event.target.value
    })
  } //ends changeFilter listener
  
  
  
  render() {



    let purchaseStock = (stockObj) => {
      if (!this.state.ownedStocks.includes(stockObj)) {
        let foundObj = this.state.allStocks.find(stock => {return stock.id === stockObj.id})
        let newOwned = [...this.state.ownedStocks, foundObj]
        this.setState ({
          ownedStocks: newOwned
        })
      }      
    }// ends purchaseStock function
    
    let sellStock = (stockObj) => {
      let indexOf = this.state.ownedStocks.indexOf(stockObj)
      let newOwned = [...this.state.ownedStocks]
      newOwned.splice(indexOf, 1)
      this.setState ({
        ownedStocks: newOwned
      })
    }// ends sellStock function

//Sorts the list of stocks Alphabetically or by price
    let sortedStocksArray = []
    if (this.state.radio === "Alphabetically") {
      sortedStocksArray = this.state.allStocks.sort((a, b) => (a.name > b.name) ? 1 : -1)
      // sortedStocksArray = this.state.allStocks.sort((a,b) => (console.log("wtf", a,b)))
    }    else if  (this.state.radio === "Price") {
      sortedStocksArray = this.state.allStocks.sort((a, b) => (a.price > b.price) ? 1 : -1)
    } 
    else {
      sortedStocksArray = this.state.allStocks
    }

// filters shown stocks based on industry Type
    let filteredStocksArr
    if (this.state.filter === "Tech") {
      filteredStocksArr = sortedStocksArray.filter(stock => stock.type === "Tech")
    } else if (this.state.filter === "Sportswear") {
      filteredStocksArr = sortedStocksArray.filter(stock => stock.type === "Sportswear")
    } else if (this.state.filter === "Finance") {
      filteredStocksArr = sortedStocksArray.filter(stock => stock.type === "Finance")
    } else {
      filteredStocksArr = sortedStocksArray
    }  // ends Filter Stocks if statements
    

    return (
      <div>
        <SearchBar  state={this.state} changeRadio={this.changeRadio} changeFilter={this.changeFilter}/>
          <div className="row">
            <div className="col-8">
              <StockContainer  allStocksArr={filteredStocksArr} purchaseStock={purchaseStock} state={this.state}/>
            </div>
            <div className="col-4">
              <PortfolioContainer  key={1} ownedStocksArr={this.state.ownedStocks} sellStock={sellStock} state={this.state}/>
            </div>
          </div>
      </div>
    );
  }

}

export default MainContainer;
