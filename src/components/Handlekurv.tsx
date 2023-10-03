import { kurvContext } from "@/context/HandleKurvContext";
import { useContext, useRef } from "react"



const Handlekurv = () => {
   
 
    const {modal,closeModal} = useContext(kurvContext);

  return (
    <>
    <dialog ref={modal} className="h-screen w-96">
        <div className="flex justify-between p-4">
            <h3>Handlekurv</h3>
            <button type="button" onClick={closeModal}>X</button>
        </div>
    </dialog>
    </>
  )
}

export default Handlekurv