import { kurvContext } from "@/context/HandleKurvContext"
import { useContext } from "react"


const Nav = ({numberOfItems}:{numberOfItems: number}) => {
  const {openModal} = useContext(kurvContext);
  
  return (
   <nav className="flex justify-end">
    <p>{numberOfItems}</p>
    <button type="button" onClick={openModal}>Handlekurv</button>
   </nav>
  )
}

export default Nav