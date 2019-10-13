import React, { Component } from 'react';
import Header from './components/Header'
import MainContainer from './containers/MainContainer'

class App extends Component {
  state = {
    stocks: [],
    portfolio: [],
    alphabetically: false,
    price: false,
    filter: "Tech"
  }

  componentDidMount() {
    fetch("http://localhost:3000/stocks")
    .then(response => response.json())
    .then(data => {
      const newObj = {...this.state}
      newObj.stocks = data
      this.setState(newObj)
    })
    
  }

  addToPortfolio = (id) => {
    const foundStock = this.state.stocks.find((stock) => {
      return stock.id === id
    })
    const newArr = [...this.state.portfolio, foundStock]
    this.setState({portfolio: newArr})
  }

  removeFromPortfolio = (id, e) => {
    const foundStock = this.state.portfolio.findIndex((stock) => {
      return stock.id === id
    })
    const newObj = {...this.state}
    const newArr = [...this.state.portfolio]
    newArr.splice(foundStock, 1)
    newObj.portfolio = newArr
    this.setState(newObj)
  }

  radioHandler = (e) => {
    const newObj = {...this.state}
    const key = e.target.value

    if (key === "Alphabetically") {
      newObj.alphabetically = true
      newObj.price = false
    }
    else if (key === "Price") {
      newObj.alphabetically = false
      newObj.price = true
    }

    this.setState(newObj)

  }

  filterHandler = (e) => {
    this.setState({filter: e.target.value})
  }

  render() {
    return (
      <div>
        <Header/>
        <MainContainer filter={this.state.filter} stocks={this.state.stocks} portfolio={this.state.portfolio} addToPortfolio={this.addToPortfolio} removeFromPortfolio={this.removeFromPortfolio} radioHandler={this.radioHandler} alphabetically={this.state.alphabetically} price={this.state.price} filterHandler={this.filterHandler} />>
      </div>
    );
  }
}

export default App;
