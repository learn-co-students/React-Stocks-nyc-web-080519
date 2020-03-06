import React, { Component } from 'react';
import StockContainer from './StockContainer'
import PortfolioContainer from './PortfolioContainer'
import SearchBar from '../components/SearchBar'

const API = "http://localhost:3000/stocks"

class MainContainer extends Component {
  constructor(){
    super()

    this.buy = this.buy.bind(this)
    this.sell = this.sell.bind(this)

    this.state = {
      stocks: [],
      portfolio: [],
      filteredStocks: [],
      sortMethod: ''
    }
  }

  componentDidMount(){
    fetch(API)
    .then(res => res.json())
    .then(stocks => {   
      this.setState({ filteredStocks: stocks, stocks })
    })
  }

  buy = stock => {  
    if(!this.state.portfolio.includes(stock)){
      const portfolio = [...this.state.portfolio, stock]
      this.setState({ portfolio })
    }
  }

  sell = stock => {
    const portfolio = this.state.portfolio.filter(portStock => {
      return stock.id !== portStock.id
    })
    this.setState({ portfolio })
  }

  filterType = (type) => {
    if (type === 'All') {
      this.setState({ filteredStocks: this.state.stocks })
    } else {
      const filteredStocks = this.state.stocks.filter(stock => {
        return stock.type === type
      })
      this.setState({ filteredStocks })
    }
  }

  sortStocks = sortMethod => {
    let filteredStocks

    if(sortMethod === 'Alphabetically'){
      filteredStocks = [...this.state.filteredStocks].sort((stock1, stock2) => {
        return stock1.name.localeCompare(stock2.name)
      })
    } else if(sortMethod === 'Price'){
      filteredStocks = [...this.state.filteredStocks].sort((stock1, stock2) => {
        return stock1.price - stock2.price
      })
    }

    this.setState({ filteredStocks, sortMethod })
  }
  
  render() {
    return (
      <div>
        <SearchBar
          filterType={this.filterType}
          sortStocks={this.sortStocks}
          sortMethood={this.state.sortMethod}
        />

        <div className="row">
          <div className="col-8">

            <StockContainer
              stocks={this.state.filteredStocks}
              buy={this.buy}
            />

          </div>
          <div className="col-4">

            <PortfolioContainer
              portfolio={this.state.portfolio}
              sell={this.sell}
            />

          </div>
        </div>
      </div>
    );
  }

}

export default MainContainer;

/* 
√ 1. set up fetch on componentDidMount to get data
√ 2. populate stocks
√ 3. set up click handler to buy stocks
√ 4. set up click handler to sell stocks
5. set up sort
6. sort up filter



*/