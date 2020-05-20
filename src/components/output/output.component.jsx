import React, { Component } from "react";
import PropTypes from "prop-types";
import Result from '../result/result.component'
import './output.style.css'
class Output extends Component {
  state = {
     Rate : 6,
  };

  calculateMonthlyRepayment = () => {
    const { amount, month } = this.props;

    const simpleIntrest = (amount*month*6)/100;
    const TotalAmount = simpleIntrest + amount;
    const monthlyRepayment = TotalAmount/month

    return <p>${Math.round(monthlyRepayment)}</p>;
  };

  percentageAPR = () => {
    return <p>{this.state.Rate}%</p>;
  };

  render() {
    return (
      <div className="Output">
        <Result func={this.percentageAPR()} text="interest rate" />
        <Result
    
          func={this.calculateMonthlyRepayment()}
          text=" monthly repayment"
        />
      </div>
    );
  }
}

Output.propTypes = {
  month: PropTypes.number.isRequired,
  amount: PropTypes.number.isRequired
};

export default Output;
