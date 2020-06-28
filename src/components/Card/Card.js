import React from 'react'
import formatNumber from '../../helpers/formatNumber'

export default function Card(props) {
  // console.log(value)
  // console.log(month, currentValue, taxValue, totalTax)
  const { month, lastValue, lastTaxValue, totalTax } = props.value
  return (
    <div className="col s2">
      <div className="card-panel teal">
        <p className="white-text">{month}</p>
        <p className="white-text">{formatNumber(lastValue)}</p>
        <p className="white-text">{formatNumber(lastTaxValue)}</p>
        <p className="white-text">{totalTax.toFixed(2)}%</p>
      </div>
    </div>
  )
}
