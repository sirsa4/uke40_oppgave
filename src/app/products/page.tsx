"use client"


import Cards from "@/components/Cards"
import Nav from "@/components/Nav"
import Handlekurv from "@/components/Handlekurv"
import HandleKurvContext from "@/context/HandleKurvContext"
import { createProducts, faker } from "@/features/cart/createCart"
import Card from "@/components/Card"
import { useEffect, useState } from "react"
import { ProductType } from "@/features/cart/types"

export default function Home() {
  const fakeproducts = Array.from(createProducts({count: 5, faker}).values());
  const [products, setProducts] = useState(undefined);
  const [itemsInCart, setItemsInCart] = useState([]);
  const [cart, setCart] = useState([]);
  const deleteProduct = (id: string) => {
    setProducts(prev => prev.filter(res => res.id !== id));
  }
  useEffect(()=>{
  //  setProducts(fakeproducts);
  //  console.log(fakeproducts);
    const getProducts = async ()=>{
      const response = await fetch("/api/products",{method: "get"});
      const result = await (response.json()) as {data: ProductType[]}
      setProducts(result.data);
      console.log(result);
    }
    getProducts();
    //products?.forEach((item)=>console.log(item.id))
  },[])

  const sendToCart = (item)=>{
    let isAlreadyInCart = false;
    //dont push product into cart if it is already there
    fakeproducts.forEach(product => {
     // console.log(product.id + " "+item.id)
      if(product.id === item.id && fakeproducts.length > 0){
        isAlreadyInCart = true;
      }
    });
    if(isAlreadyInCart)
      return ;
      setCart([...cart,item])
    
    console.log(cart);
   }


  return (
    <>
      <div className="container grid gap-10 p-4">
        <HandleKurvContext>
        <Nav numberOfItems={cart.length}/>
        <div className="grid grid-cols-3">
          <Cards>
           {products?.map(product => {
            return <Card key={product.id} {...product} onDelete={deleteProduct} sendToCart={sendToCart}  />
           })} 
          </Cards>
          <Handlekurv cart={cart} />
        </div>
        </HandleKurvContext>
      </div>
    </>
  )
}
