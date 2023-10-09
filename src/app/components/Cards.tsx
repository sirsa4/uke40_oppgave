import { ReactNode } from "react"
import Button from "./Button"

const Cards = ({children}:{children: ReactNode}) => {
  return (
    <>
      <main className="col-span-2 grid gap-4 md:grid-cols-2">
        {children}
      </main>
    </>
  )
}

export default Cards
