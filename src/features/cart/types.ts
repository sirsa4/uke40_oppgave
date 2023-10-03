export type ProductType = {
    id: number
    title: string
    category: string
    price: number
}

export type Faker = {
    id: () => number
    title: () => string
    category: () => string
    price: () => number
  }

  export type CreateProductParams = {
    existingResponses?: Map<string, Response>
    count: number
    faker: Faker
  }

  export type CreateProducts = (
    params: CreateProductParams,
  ) => Map<string, Response>
  