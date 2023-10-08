"use client"
import Image from "next/image"

import Cards from "@/components/Cards"
import Nav from "@/components/Nav"
import Handlekurv from "@/components/Handlekurv"
import HandleKurvContext from "@/context/HandleKurvContext"
import { createProducts, faker } from "@/features/cart/createCart"
import Card from "@/components/Card"
import { useState } from "react"

export default function Home() {
  const fakeproducts = Array.from(createProducts({count: 5, faker}).values());
  const [products, setProducts] = useState(fakeproducts);
  const deleteProduct = (id: string) => {
    setProducts(prev => prev.filter(res => res.id !== id));
  }
  return (
    <>
      <div className="container grid gap-10 p-4">
        <HandleKurvContext>
        <Nav />
        <div className="grid grid-cols-3">
          <Cards>
           {products.map(product => {
            return <Card key={product.id} {...product} onDelete={deleteProduct} />
           })} 
          </Cards>
          <Handlekurv />
        </div>
        </HandleKurvContext>
      </div>
    </>
  )
}
