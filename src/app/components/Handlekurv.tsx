"use client"
import { useContext, useRef } from "react"

import { kurvContext } from "@/context/HandleKurvContext"
import CartItems from "./CartItems"
import BuyItems from "./BuyItems"

const Handlekurv = ({cart, deleteProduct,totalPrice, increaseItem, price, setPrice}:any) => {
  const { modal, closeModal } = useContext(kurvContext)
//console.log(itemsInCart);
  return (
    <>
      <dialog ref={modal} className="h-screen w-96 fixed top-0 right-0">
        <div className="flex justify-between p-4">
          <h3>Handlekurv</h3>
          <button type="button" onClick={closeModal}>
            X
          </button>
        </div>
        <section className="flex flex-col gap-4">
          <CartItems cart={cart} deleteProduct={deleteProduct} increaseItem={increaseItem} price={price} setPrice={setPrice}   />
        </section>
        <BuyItems totalPrice={totalPrice} />
      </dialog>
    </>
  )
}

export default Handlekurv
