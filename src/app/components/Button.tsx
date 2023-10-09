type ButtonTextType = {
    text: string
    sendToCart: ()=> void
}

const Button = ({text,sendToCart}: ButtonTextType) => {
  return (
    <div>
      <button onClick={sendToCart} className="bg-[#5488c4] text-white py-1 px-2" type="button">{text}</button>
    </div>
  )
}

export default Button