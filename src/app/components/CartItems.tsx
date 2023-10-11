"use client"
import React from "react"

const CartItems = ({cart,deleteProduct,increaseItem,decreaseItem ,price, setPrice}:any) => {
  
  
  return (
    <div className="flex flex-col gap-4">
      
      {cart !== undefined && cart.length > 0? cart?.map(item => {
       //  console.log(item);
       setPrice(item.price)
        
        return  <article key={item.id} className="flex justify-around">
        <button onClick={()=>increaseItem(item.id)} type="button">+</button>
        <button onClick={()=>decreaseItem(item.id)} type="button">-</button>
        <span>{item.quantity}</span>
        <p>{`${item.title}(${item.price},-)`}</p>
        <button type="button" onClick={()=>deleteProduct(item.id)}>X</button>
      </article>
      }): null}
     
    </div>
  )
}

export default CartItems
