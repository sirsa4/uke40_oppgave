//Types for generating random products
export type ProductType = {
    id: string
    title: string
    category: string
    description: string
    quantity: number
    price: number
    initPrice: number
}

export type Faker = {
    id: () => string
    title: () => string
    category: () => string
    description: () =>string
    price: () => number
  }

  export type CreateProductParams = {
    existingProducts?: Map<string, ProductType>
    count: number
    faker: Faker
  }

  export type CreateProductsType = (
    params: CreateProductParams,
  ) => Map<string, ProductType>

  export type CartType = {
    id: string,
    quantity: number,
    title: string,
    price: number
    initPrice: number
  }
  