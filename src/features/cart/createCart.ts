import type {Faker, CreateProductsType} from './types'

//fake title, categories, prices 
const fakeCategories: string[] = ["ART", "BOOK", "HARDWARE"]
const fakePrices: number[] = [455,299,350,100,150,120,500,420,399]
const fakeTitle: string[] = ["eple","godteri","na'na","iphone 2","te","kaffee","chips","kanin"];

//random lorem for description. i got this function from chatGTP
const generateRandomLoremIpsum = (length:number) => {
  const words = [
    "Lorem", "ipsum", "dolor", "sit", "amet", "consectetur", "adipiscing", "elit",
    "sed", "do", "eiusmod", "tempor", "incididunt", "ut", "labore", "et", "dolore", "magna",
    "aliqua", "Ut", "enim", "ad", "minim", "veniam", "quis", "nostrud", "exercitation", "ullamco",
    "laboris", "nisi", "ut", "aliquip", "ex", "ea", "commodo", "consequat", "Duis", "aute", "irure",
    "dolor", "in", "reprehenderit", "in", "voluptate", "velit", "esse", "cillum", "dolore", "eu",
    "fugiat", "nulla", "pariatur", "Excepteur", "sint", "occaecat", "cupidatat", "non", "proident",
    "sunt", "in", "culpa", "qui", "officia", "deserunt", "mollit", "anim", "id", "est", "laborum"
  ];

  let loremIpsum = "";
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * words.length);
    loremIpsum += words[randomIndex] + " ";
  }

  return loremIpsum.trim();
}

// Generate a random Lorem Ipsum-like text with 50 words
//const randomLoremIpsum = generateRandomLoremIpsum(50);



//functions which generate random title, category and price.
const getRandomID = ()=> {
    return Math.random().toString(36).slice(2);
}
const getRandomItem = <T>(items: T[]) =>{
  const randomIndex = Math.floor(Math.random() * items.length);
  return items[randomIndex];
}

//fake product object
export const faker: Faker = {
    id: () => getRandomID(),
    title: ()=> getRandomItem(fakeTitle),
    category: ()=> getRandomItem(fakeCategories),
    description: () => generateRandomLoremIpsum(20),
    price: ()=>getRandomItem(fakePrices),
}


const createProducts: CreateProductsType = ({existingProducts,count,faker})=>{
  
    const products = new Map(existingProducts);

    if(products.size === 0 && count === 0){
      throw new Error("there are no products")
    }
    for (let i = 0; i < count; i++) {
      const product = {
        id: faker.id(),
        title: faker.title(),
        category: faker.category(),
        description: faker.description(),
        price: faker.price()
      };  
      products.set(`${product.title}`,product);
    }
    return products;
}

export {createProducts,getRandomID}
