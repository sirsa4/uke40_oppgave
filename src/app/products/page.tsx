"use client"

import { useEffect, useState } from "react"

import Card from "@/components/Card"
import Cards from "@/components/Cards"
import Handlekurv from "@/components/Handlekurv"
import Nav from "@/components/Nav"
import HandleKurvContext from "@/context/HandleKurvContext"
import { createProducts, faker } from "@/features/cart/createCart"
import { CartType, ProductType } from "@/features/cart/types"
import { useCart } from "@/hooks/useCart"

export default function Home() {
  //dummy used before api route was created
  // const fakeproducts = Array.from(createProducts({count: 5, faker}).values());

  //state for products rendered in /products
  const [products, setProducts] = useState<ProductType>()

  const {
    cart,
    deleteProduct,
    buyItems,
    increaseItem,
    price,
    setPrice,
    totalPrice,
    decreaseItem,
    sendToCart,
  } = useCart()

  useEffect(() => {
    //  setProducts(fakeproducts);
    //  console.log(fakeproducts);
    const getProducts = async () => {
      const response = await fetch("/api/products", { method: "get" })
      const result = (await response.json()) as { data: ProductType[] }
      setProducts(result.data)
      // console.log(result);
    }
    getProducts()
    //products?.forEach((item)=>console.log(item.id))
  }, [])

  return (
    <>
      <div className="container grid gap-10 p-4">
        <HandleKurvContext>
          <Nav numberOfItems={cart.length} />
          <div className="grid grid-cols-3">
            <Cards>
              {products?.map((product: ProductType) => {
                return (
                  <Card
                    key={product.id}
                    {...product}
                    onDelete={deleteProduct}
                    sendToCart={sendToCart}
                  />
                )
              })}
            </Cards>
            <Handlekurv
              cart={cart}
              deleteProduct={deleteProduct}
              totalPrice={totalPrice}
              increaseItem={increaseItem}
              decreaseItem={decreaseItem}
              price={price}
              setPrice={setPrice}
              buyItem={buyItems}
            />
          </div>
        </HandleKurvContext>
      </div>
    </>
  )
}
