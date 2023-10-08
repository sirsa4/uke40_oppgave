
import Button from "./Button"

type ProductType = {
    id: string,
    title: string,
    description: string,
    category: string
    price: number
    onDelete?: (id: string) => void
}


const Card = (props: ProductType) => {
    const {title, description, category, price,onDelete} = props;
  return (
    <article className="grid p-4 gap-4 border-[0.01px]  border-solid rounded border-black shadow-5xl">
    <header className="flex justify-end p-3">
        <p>{category}</p>
    </header>
    <div className="grid gap-3 px-10">
        <h2 className="font-bold text-xl">{title}</h2>
        <p className="text-start">{description}</p>
        <p>{price}</p>
        <Button text="Legg i handlekurv" />
    </div> 
</article>
  )
}

export default Card