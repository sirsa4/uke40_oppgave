import { useEffect, useState } from "react"

import { CartType, ProductType } from "@/features/cart/types"

export const useCart = () => {
  const [cart, setCart] = useState<CartType[]>([])
  //state for totall prices test
  const [totalPrice, setTotalPrice] = useState(0)
  const [price, setPrice] = useState(0)

  const sendToCart = (item: CartType) => {
    let isAlreadyInCart = false

    cart.forEach((product) => {
      //  console.log(product)
      if (product.id === item.id) {
        console.log(`init: ${product.initPrice} - price: ${product.price}`)
        isAlreadyInCart = true
        return
      }
    })
    if (!isAlreadyInCart) setCart([...cart, item])

    // setPrice(prev => prev.price * 2);
    // console.log(cart)
  }
  //useEffect to track changes in price
  useEffect(() => {
    const prices = cart.reduce((total, current) => {
      return total + current.price
    }, 0)
    //console.log(prices)
    setTotalPrice(prices)
  }, [cart])
  //delete single product
  const deleteProduct = (id: string) => {
    setCart((prev) => prev.filter((res) => res.id !== id))
  }

  const increaseItem = (id: string) => {
    //first get index of current item that is being increased
    const currentItemIndex = cart.findIndex((product) => product.id === id)

    //make a copy of current item. React does not changing elements, but you can switch another item in same index of state array
    const newItem = { ...cart[currentItemIndex] }

    newItem.quantity++
    newItem.price = newItem.quantity * newItem.initPrice
    // console.log(`init: ${newItem.initPrice} new price: ${newItem.price}`);

    const copyCartList = [...cart]
    copyCartList[currentItemIndex] = newItem

    setCart(copyCartList)
  }

  const decreaseItem = (id: string) => {
    //this function is to decrease item quantity. it is copy of increaseItem() with small change of decreasing quaniity and stopping the count when quanity is at 1 so you can't go below that
    const currentItemIndex = cart.findIndex((product) => product.id === id)

    if (cart[currentItemIndex].quantity === 1) {
      console.log("it is one!")

      return
    }
    const newItem = { ...cart[currentItemIndex] }

    newItem.quantity--
    newItem.price = newItem.quantity * newItem.initPrice
    // console.log(`init: ${newItem.initPrice} new price: ${newItem.price}`);

    const copyCartList = [...cart]
    copyCartList[currentItemIndex] = newItem

    setCart(copyCartList)
  }

  //function to log total price when clicking kjøp button
  const buyItems = () => {
    console.log(totalPrice)
  }

  return {
    cart,
    price,
    setPrice,
    deleteProduct,
    totalPrice,
    increaseItem,
    buyItems,
    decreaseItem,
    sendToCart
  }
}
