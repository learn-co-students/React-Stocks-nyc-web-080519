import React, { Component } from 'react';
import StockContainer from './StockContainer'
import PortfolioContainer from './PortfolioContainer'
import SearchBar from '../components/SearchBar'

class MainContainer extends Component {

  state = {
    stocks : [],
    showStocks : [],
    portStocks : []
  }

  componentDidMount(){
    fetch('http://localhost:3000/stocks')
    .then(resp => resp.json())
    .then(data => {
      this.setState({
        stocks : data,
        showStocks : data
      })
    })
  }

  addToPort = (stock) => {
    let newPortStocks ;
    if (!this.state.portStocks.includes(stock)) {
      newPortStocks = [...this.state.portStocks, stock] ;
      this.setState({ portStocks : newPortStocks})
    }
  }

  removeFromPort = (stock) => {
    this.setState({ portStocks : [...this.state.portStocks].filter(stockObj => stockObj !== stock)})
  }

  sortStock = (target) => {
    let sorted;
    switch(target.value){
      case 'Alphabetically' :
        sorted = this.state.showStocks.sort((a, b) => a.name > b.name ?  1 : -1 ) ;
        break ;
      case 'Price' :
        sorted = this.state.showStocks.sort((a, b) => a.price > b.price ?  1 : -1 ) ;
        break ;
      default :
        sorted = this.state.showStocks
    } 
    this.setState({ showStocks : sorted })
  }

  filterStock = (filterBy) => {
    if (filterBy === 'All') {
      this.setState({ showStocks : this.state.stocks })
    } else {
      let filtered = this.state.stocks.filter(stock => stock.type === filterBy) ;
      this.setState({ showStocks : filtered })
    }
  }

  render() {
    return (
      <div>
        <SearchBar sortStock={this.sortStock} filterStock={this.filterStock}/>

          <div className="row">
            <div className="col-8">

              <StockContainer stocks={this.state.showStocks} addToPort={this.addToPort}/>

            </div>
            <div className="col-4">

              <PortfolioContainer stocks={this.state.portStocks} removeFromPort={this.removeFromPort}/>

            </div>
          </div>
      </div>
    );
  }

}

export default MainContainer;
