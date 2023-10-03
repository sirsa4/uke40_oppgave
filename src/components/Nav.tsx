import { kurvContext } from "@/context/HandleKurvContext"
import { useContext } from "react"


const Nav = () => {
  const {openModal} = useContext(kurvContext);
  
  return (
   <nav className="flex justify-end">
    <button type="button" onClick={openModal}>Handlekurv</button>
   </nav>
  )
}

export default Nav