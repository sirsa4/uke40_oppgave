"use client"

import { createProducts,fakeProduct } from "@/features/cart/createCart";

const page = () => {
    const products = Array.from(createProducts({count: 5, fakeProduct}).values());
    console.log(products);
    
  return (
    <div>page</div>
  )
}

export default page