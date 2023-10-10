import React from 'react'

const BuyItems = ({totalPrice}:{totalPrice: number}) => {
  return (
    <div className="pl-4 py-2">
    <p>{totalPrice}</p>
    <button type="button">Kjøp</button>
  </div>
  )
}

export default BuyItems