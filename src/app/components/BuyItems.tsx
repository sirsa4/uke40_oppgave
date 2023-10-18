"use client"

import React from "react"

const BuyItems = ({
  totalPrice,
  buyItems,
}: {
  totalPrice: number
  buyItems: void
}) => {
  const showTotalPrice = (price: number) => {
    console.log(price)
  }
  return (
    <div className="py-2 pl-4">
      <p>{totalPrice}</p>
      <button type="button" onClick={() => showTotalPrice(totalPrice)}>
        Kjøp
      </button>
    </div>
  )
}

export default BuyItems
