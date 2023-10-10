"use client"


import Cards from "@/components/Cards"
import Nav from "@/components/Nav"
import Handlekurv from "@/components/Handlekurv"
import HandleKurvContext from "@/context/HandleKurvContext"
import { createProducts, faker } from "@/features/cart/createCart"
import Card from "@/components/Card"
import { SetStateAction, useEffect, useState } from "react"
import { ProductType } from "@/features/cart/types"

export default function Home() {
  //dummy used before api route was created
 // const fakeproducts = Array.from(createProducts({count: 5, faker}).values());
 
 //state for products rendered in /products
  const [products, setProducts] = useState<SetStateAction>(undefined);
  //state for products in cart
  const [cart, setCart] = useState([]);
  //state for totall prices test
  const [totalPrice, setTotalPrice] = useState(0);

  const deleteProduct = (id: string) => {
    setCart(prev => prev.filter(res => res.id !== id));
  }
  useEffect(()=>{
  //  setProducts(fakeproducts);
  //  console.log(fakeproducts);
    const getProducts = async ()=>{
      const response = await fetch("/api/products",{method: "get"});
      const result = await (response.json()) as {data: ProductType[]}
      setProducts(result.data);
     // console.log(result);
    }
    getProducts();
    //products?.forEach((item)=>console.log(item.id))
  },[])

  useEffect(()=>{
    const prices = cart.reduce((total,current)=>{
      return total + current.price;
    },0);
    //console.log(prices)
    setTotalPrice(prices)
  },[cart]);

  const sendToCart = (item)=>{
    let isAlreadyInCart = false;
   
    
    cart.forEach(product => {
   //  console.log(product)
      if(product.id === item.id){
        isAlreadyInCart = true;
      }
    
    });
    if(!isAlreadyInCart)
    setCart([...cart,item])
   // console.log(cart)
   
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
         <Handlekurv cart={cart} deleteProduct={deleteProduct} totalPrice={totalPrice} />
        </div>
        </HandleKurvContext>
      </div>
    </>
  )
}
