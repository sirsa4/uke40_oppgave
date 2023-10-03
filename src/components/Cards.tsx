import Button from "./Button"


const Cards = () => {
  return (
    <article className="grid p-4 gap-4 border-[0.01px]  border-solid rounded border-black shadow-5xl">
        <header className="flex justify-end p-3">
            <p>Category</p>
        </header>
        <div className="grid gap-3 px-10">
            <h2 className="font-bold text-xl">Title</h2>
            <p className="text-start">Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui officiis soluta suscipit quo quae provident nam maxime facilis exercitationem aliquam.</p>
            <p>200kr</p>
            <Button text="Legg i handlekurv" />
        </div>
       
    </article>
  )
}

export default Cards