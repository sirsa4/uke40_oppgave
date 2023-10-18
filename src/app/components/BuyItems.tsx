import React from 'react'

const BuyItems = ({totalPrice,buyItems}:{totalPrice: number, buyItems: any}) => {
  return (
    <div className="pl-4 py-2">
    <p>{totalPrice}</p>
    <button type="button" onClick={buyItems}>Kjøp</button>
  </div>
  )
}

export default BuyItems