import {Article} from './types'

const defaultOrder = {
  articles: [
    {
      price: 1200.50,
      vat: 0.2,
      title: 'Macbook Air Refurbished - 2013'
    },
    {
      price: 9,
      vat: 0,
      title: 'I feel smashing subscription'
    }
  ],
  customer: {
    name: 'Fritz Furball',
    address: {
      city: 'Smashing Hill',
      zip: '90210',
      street: 'Whisker-ia Lane',
      number: '1337'
    },
    dateOfBirth: new Date(2006,9,1)
  }
}

type Order = typeof defaultOrder // extract the shape of my object

function checkOrders(orders: Order[]){
  let valid = true;
  for (let order of orders){
    valid = valid && !!(order && order.articles.length > 0)
  }
  return valid
}

function checkArticleInStock(article: Article){
  if (article.stock){
    return article.stock > 0
  }
  return false
}

const book: Article = {
  price: 29,
  vat: 0.2,
  title: 'Another book by Smashing books'
}

class Discount {
  isPercentage: boolean
  amount: number

  constructor(
    isPercentage: boolean,
    amount: number){
    this.isPercentage = isPercentage
    this.amount = amount
  }

  apply(article: Article){
    if(this.isPercentage){
      article.price -= (article.price * this.amount)
    } else {
      article.price -= this.amount
    }
  }
}

/**
 * This class always gives 20%, but only if
 * the price is not higher than 40 EUR
 */
class TwentyPercentDiscount extends Discount {
  constructor(){
    super(true, 0.2)
  }

  apply(article: Article){
    if (article.price <= 40){
      super.apply(article)
    }
  }

  isValidForDiscount(article: Article){
    return article.price <= 40
  }
}

let discount: Discount = new Discount(true, 0.2)
let prevPrice = book.price
discount.apply(book)
let result = `${prevPrice} with ${discount.amount}% discount = ${book.price}`

let twentyDiscount: TwentyPercentDiscount = new TwentyPercentDiscount()
prevPrice = book.price
twentyDiscount.apply(book)
result += `<br/>${prevPrice} with ${discount.amount}% discount = ${book.price}`

let validForDiscount = twentyDiscount.isValidForDiscount(book)
result += `<br/>${book.price} valid for discount? ${validForDiscount}`

export {result}
