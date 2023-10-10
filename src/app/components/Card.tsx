import Button from "./Button"

type ProductType = {
  id: string
  title: string
  description: string
  category: string
  price: number
  sendToCart: (item:any) => void
  onDelete?: (id: string) => void
}
"use client"
const Card = (props: ProductType) => {
  const { id,title, description, category, price, onDelete, sendToCart } = props



  return (
    <article className="shadow-5xl grid gap-4 rounded  border-[0.01px] border-solid border-black p-4">
      <header className="flex justify-end p-3">
        <p>{category}</p>
      </header>
      <div className="grid gap-3 px-10">
        <h2 className="text-xl font-bold">{title}</h2>
        <p className="text-start">{description}</p>
        <p>{price}</p>
        <button className="bg-[#5488c4] text-white py-1 px-2 active:scale-90" onClick={()=>sendToCart(props)}>Legg i handlekurv</button>
      </div>
    </article>
  )
}

export default Card
