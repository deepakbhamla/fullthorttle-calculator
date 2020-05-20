import React from 'react'
import InputRange from "react-input-range";
import './calculator.style.css'

export const Calculator = ({amount,month,handleAmount,handleMonth}) => {
    return (
      <div className='Calc'>
            <h4> Borrow Money : ${amount}</h4>
           <InputRange
            step={100}
            maxValue={5000}
            minValue={500}
            value={amount}
            onChange={handleAmount}
          />
           <h4> month{month > 6 && "s"} : {month} </h4>
          <InputRange
            className="Input"
            step={1}
            maxValue={24}
            minValue={6}
            value={month}
            onChange={handleMonth}
          />
      </div>
    )
}
