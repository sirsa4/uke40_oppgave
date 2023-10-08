import { useContext, useRef } from "react"

import { kurvContext } from "@/context/HandleKurvContext"
import CartItems from "./CartItems"

const Handlekurv = () => {
  const { modal, closeModal } = useContext(kurvContext)

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
          <CartItems />
          <CartItems />
          <CartItems />
          <CartItems />
        </section>
      </dialog>
    </>
  )
}

export default Handlekurv
