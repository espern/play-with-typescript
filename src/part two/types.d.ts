export type StoragItem = {
  weight: number
}

export type ShipStorage = {
  max: number,
  items: StoragItem[]
}

export type Article = {
  title: string,
  price: number,
  vat: number,
  stock?: number,
  description?: string
}