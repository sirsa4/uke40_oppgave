"use client"


import Cards from "@/components/Cards"
import Nav from "@/components/Nav"
import Handlekurv from "@/components/Handlekurv"
import HandleKurvContext from "@/context/HandleKurvContext"
import { createProducts, faker } from "@/features/cart/createCart"
import Card from "@/components/Card"
import { SetStateAction, useEffect, useState } from "react"
import { CartType, ProductType } from "@/features/cart/types"

export default function Home() {
  //dummy used before api route was created
 // const fakeproducts = Array.from(createProducts({count: 5, faker}).values());
 
 //state for products rendered in /products
  const [products, setProducts] = useState<ProductType>();
  //state for products in cart
  const [cart, setCart] = useState<CartType[]>([]);
  //state for totall prices test
  const [totalPrice, setTotalPrice] = useState(0);
  const [price, setPrice] = useState(0);

  const increaseItem = (id: string) =>{
    //first get index of current item that is being increased
    const currentItemIndex = cart.findIndex((product) => product.id === id); 

    //make a copy of current item. React does not changing elements, but you can switch another item in same index of state array
    const newItem = {...cart[currentItemIndex]}

    newItem.quantity++;
    newItem.price = newItem.quantity * newItem.initPrice;
   // console.log(`init: ${newItem.initPrice} new price: ${newItem.price}`);
    

    const copyCartList = [...cart];
    copyCartList[currentItemIndex] = newItem
 

    setCart(copyCartList)
   
  }


  const decreaseItem = (id: string) =>{
    //this function is to decrease item quantity. it is copy of increaseItem() with small change of decreasing quaniity and stopping the count when quanity is at 1 so you can't go below that
    const currentItemIndex = cart.findIndex((product) => product.id === id); 

    if(cart[currentItemIndex].quantity === 1){
      console.log("it is one!");
      
      return
    }
    const newItem = {...cart[currentItemIndex]}

    newItem.quantity--;
    newItem.price = newItem.quantity * newItem.initPrice;
   // console.log(`init: ${newItem.initPrice} new price: ${newItem.price}`);
    

    const copyCartList = [...cart];
    copyCartList[currentItemIndex] = newItem
 

    setCart(copyCartList)
   
  }
 

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
//useEffect to track changes in price
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
        console.log(`init: ${product.initPrice} - price: ${product.price}`)
        return  
      }
    
    });
    if(!isAlreadyInCart)
    setCart([...cart,item])
  
   // setPrice(prev => prev.price * 2);
   // console.log(cart)
   
   }


  return (
    <>
      <div className="container grid gap-10 p-4">
        <HandleKurvContext>
        <Nav numberOfItems={cart.length}/>
        <div className="grid grid-cols-3">
          <Cards>
           {products?.map((product: ProductType) => {
            return <Card key={product.id} {...product} onDelete={deleteProduct} sendToCart={sendToCart}  />
           })} 
          </Cards>
         <Handlekurv cart={cart} deleteProduct={deleteProduct} totalPrice={totalPrice} increaseItem={increaseItem} decreaseItem={decreaseItem} price={price} setPrice={setPrice}  />
        </div>
        </HandleKurvContext>
      </div>
    </>
  )
}
