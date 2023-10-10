import React from "react"

const CartItems = ({cart}:any) => {
  
  
  return (
    <div className="flex flex-col gap-4">
      
      {cart !== undefined && cart.length > 0? cart.map(item => {
        console.log(item);
        
        return  <article key={item.id} className="flex justify-around">
        <button type="button">+</button>
        <button type="button">-</button>
        <span>1</span>
        <p>{`${item.title}(${item.price},-)`}</p>
        <button type="button">X</button>
      </article>
      }): null}
     
    </div>
  )
}

export default CartItems
