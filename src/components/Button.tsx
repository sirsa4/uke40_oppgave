type ButtonTextType = {
    text: string
}

const Button = ({text}: ButtonTextType) => {
  return (
    <div>
      <button className="bg-[#5488c4] text-white py-1 px-2" type="button">{text}</button>
    </div>
  )
}

export default Button