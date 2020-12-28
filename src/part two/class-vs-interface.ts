type Article = {
  title: string,
  price: number,
  vat: number,
  stock?: number,
  description?: string
}

interface ShopItem {
  title: string
  price: number
  vat: number
  stock?: number
  description?: string
}

// declaration merging here...
interface ShopItem {
  reviews: {
    rating: number,
    content: string
  }[]
}