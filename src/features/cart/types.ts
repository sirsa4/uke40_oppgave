export type ProductType = {
    id: string
    title: string
    category: string
    price: number
}

export type Faker = {
    id: () => string
    title: () => string
    category: () => string
    price: () => number
  }

  export type CreateProductParams = {
    existingProducts?: Map<string, Response>
    count: number
    faker: Faker
  }

  export type CreateProductsType = (
    params: CreateProductParams,
  ) => Map<string, Response>
  