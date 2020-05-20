import React, { Component } from "react";
import './App.css'
import {Header} from './components/header/header.component'
import {Calculator} from './components/calculator/calculator.component'
import Output from "./components/output/output.component";
import {Footer} from './components/footer/footer.component'
import SwipeableTemporaryDrawer from './components/sidebar/sidebar.component'

class App extends Component {
  state = {
    amount: 500,
    month: 6,
 
  };

  handleAmount = value => {
    this.setState({ amount: value });
  };
  handleMonth = value => {
    this.setState({ month: value });
  };

  render() {
    const { amount, month } = this.state;
    return (
      <div className='App'>
          <Header/ >
          <span className='side'>
               <SwipeableTemporaryDrawer/>
          </span>    
          <div className='container'>
             <Calculator 
              amount={amount} 
              month={month} 
              handleAmount={this.handleAmount}
              handleMonth={this.handleMonth}

            />
            <Output month={month} amount={amount} />
          </div>  
        <Footer/>
    </div>
 
    );
  }
}

export default App;
