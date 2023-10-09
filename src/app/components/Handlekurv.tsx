
import { useContext, useRef } from "react"

import { kurvContext } from "@/context/HandleKurvContext"
import CartItems from "./CartItems"
import BuyItems from "./BuyItems"

const Handlekurv = ({cart}:any) => {
  const { modal, closeModal } = useContext(kurvContext)
//console.log(itemsInCart);
  return (
    <>
      <dialog ref={modal} className="h-screen w-96">
        <div className="flex justify-between p-4">
          <h3>Handlekurv</h3>
          <button type="button" onClick={closeModal}>
            X
          </button>
        </div>
        <section className="flex flex-col gap-4">
          <CartItems cart={cart} />
          <CartItems />
          <CartItems />
          <CartItems />
        </section>
        <BuyItems />
      </dialog>
    </>
  )
}

export default Handlekurv