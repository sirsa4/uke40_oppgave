import type {Faker, CreateProductsType} from './types'

//fake title, categories, prices 
const fakeCategories: string[] = ["ART", "BOOK", "HARDWARE"]
const fakePrices: number[] = [455,299,350,100,150,120,500,420,399]
const fakeTitle: string[] = ["eple","godteri","na'na","iphone 2"];

//functions which generate random title, category and price.
const getRandomID = ()=> {
    return Math.random().toString(36).slice(2);
}
const getRandomItem = <T>(items: T[]) =>{
  const randomIndex = Math.floor(Math.random() * items.length);
  return items[randomIndex];
}

//fake product object
export const fakeProduct: Faker = {
    id: () => getRandomID(),
    title: ()=> getRandomItem(fakeTitle),
    category: ()=> getRandomItem(fakeCategories),
    price: ()=>getRandomItem(fakePrices),
}


const createProducts: CreateProductsType = ({existingProducts,count,faker})=>{
    const products = new Map(existingProducts);

    if(products.size === 0 && count === 0){
      throw new Error("there are no products")
    }
    for (let i = 0; i < count; i++) {
      const product = {
        id: fakeProduct.id(),
        title: fakeProduct.title(),
        category: fakeProduct.category(),
        price: fakeProduct.price()
      };  
      products.set(`${product.title}`,product);
    }
    return products;
}

export {createProducts,getRandomID}