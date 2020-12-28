import { Article } from "../part two/types"

function addVat(price: number, vat: number = 0.2): number {
  return price * (1 + vat)
}

let deliveryAddress: string[] = []

function selectDeliveryAddress(addressOrIndex: any): string {
  if (typeof addressOrIndex === 'number' &&
    addressOrIndex < deliveryAddress.length) {
    return deliveryAddress[addressOrIndex]
  } else if (typeof addressOrIndex === 'string') {
    return addressOrIndex
  }
  return ''
}

const movBackup = {
  title: 'Helvetica',
  price: 6.66,
  vat: 0.19,
  stock: 1000,
  description: '90 minutes about Helvetica',
  rating: 5
}

const movie: Article = movBackup

function createArticleElement(article: Article) {
  const title = article.title
  const price = addVat(article.price, article.vat)
  return `<h2>Buy ${title} for ${price}</h2>`
}

export const result = createArticleElement(movie)