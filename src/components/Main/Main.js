import React, { useState, useEffect } from 'react'
import Card from '../Card/Card'

export default function Main() {

  const [total, setTotal] = useState([])
  // const [lastValue, setLastValue] = useState(1000)
  const [initialValue, setInitialValue] = useState(80000)
  const [tax, setTax] = useState(1)
  const [months, setMonths] = useState(3)

  useEffect(() => {
    let result = []
    let lastValue = parseFloat(initialValue)
    let lastTaxValue = 0
    console.log("valor novo", lastValue)

    for (let i = 1; i <= months; i++) {

      let taxValue = parseFloat(lastValue * (tax / 100))
      lastTaxValue += taxValue
      console.log("valor em reais da taxa", taxValue)

      //soma entre valor anterior mais rendimento
      lastValue += taxValue
      console.log("valor novo", lastValue)


      let totalTax = (lastTaxValue * 100) / initialValue

      result.push({
        month: i,
        lastValue,
        lastTaxValue,
        totalTax
      })

    }

    setTotal(result)

  }, [initialValue, months, tax])

  const handleInitialValue = (e) => {
    setInitialValue(e.target.value)
  }
  const handleTax = (e) => {
    setTax(e.target.value)
  }

  const handleMonths = (e) => {
    setMonths(e.target.value)
  }

  return (
    <div>
      <div className="row">
        <div className="input-field col s4">
          <input id="value" type="number" className="validate" value={initialValue} onChange={handleInitialValue} />
          <label className="active" htmlFor="value">Valor inicial:</label>
        </div>
        <div className="input-field col s4">
          <input id="tax" type="number" className="validate" value={tax} onChange={handleTax} />
          <label className="active" htmlFor="tax">Taxa:</label>
        </div>
        <div className="input-field col s4">
          <input id="months" type="number" className="validate" value={months} onChange={handleMonths} />
          <label className="active" htmlFor="months">Período:</label>
        </div>
      </div>
      <div>
        <div className="row">
          {total.map(totalPortion => {
            return (
              <Card key={totalPortion.month} value={totalPortion} />
            )
          })}
        </div>
      </div>
    </div>
  )
}
