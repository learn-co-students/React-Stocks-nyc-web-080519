import React, { Component } from 'react';
import StockContainer from './StockContainer'
import PortfolioContainer from './PortfolioContainer'
import SearchBar from '../components/SearchBar'

const API = "http://localhost:3000/stocks"

class MainContainer extends Component {

  state = {
    stocks: [],
    userStocks: [],
    filtered: []
  }

  componentDidMount() {
    fetch(API)
      .then(resp => resp.json())
      .then(data => {
        this.setState({
          stocks: data
        })
      })
  }

  clickHandler = (current) => {
    if(!this.state.userStocks.includes(current)){
      let userStocks = [...this.state.userStocks, current]
      this.setState({
        userStocks
      })
    }
  }

  removeClickHandler = (current) => {
    let userStocks = [...this.state.userStocks]
    let found = userStocks.find(stock => stock === current)
    userStocks.splice(userStocks.indexOf(found), 1)
    this.setState({
      userStocks
    })
  }

  filterHandler = (e) => {
    let category = e.target.value
    let filtered = [...this.state.stocks].filter(stock => stock.type === category)
    this.setState({
      filtered
    })
  }

  sortHandler = (e) => {
    let value = e.target.value
    let sorted = [...this.state.stocks]
    if (value === "Alphabetically"){
      sorted = sorted.sort((a,b) => a.name > b.name ? 1 : -1)
    } else if (value === "Price"){
      sorted = sorted.sort((a, b) => a.price > b.price ? 1 : -1 )
    } 
    this.setState({
      filtered: sorted
    })
  }


  render() {

    return (
      <div>
        <SearchBar filter={this.filterHandler} sort={this.sortHandler}/>

          <div className="row">
            <div className="col-8">

              <StockContainer stocks={(this.state.filtered.length !== 0) ? this.state.filtered : this.state.stocks} buyStock={this.clickHandler}/>

            </div>
            <div className="col-4">

              <PortfolioContainer stocks={this.state.userStocks} removeStock={this.removeClickHandler}/>

            </div>
          </div>
      </div>
    );
  }

}

export default MainContainer;
