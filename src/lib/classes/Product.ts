class Product {
  id : number;
  name : string;
  price: number;
  rate: number;
  reviewsNumber: number;
  details: string;
  information: string;
  colors?: string[];
  sizes?: string[];

  constructor(id : number, name : string, price : number, rate : number, reviewsNumber : number, details : string, information: string, colors?: string[]){
    this.id = id
    this.name = name
    this.price = price
    this.rate = rate
    this.reviewsNumber = reviewsNumber
    this.details = details
    this.information = information
    this.colors = colors
  }

}

export default Product;