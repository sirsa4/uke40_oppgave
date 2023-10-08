import React from "react"

const CartItems = () => {
  return (
    <article className="flex justify-around">
      <button type="button">+</button>
      <button type="button">-</button>
      <span>2</span>
      <p>Racoon(240,-)</p>
      <button type="button">X</button>
    </article>
  )
}

export default CartItems
