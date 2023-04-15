import { browser } from "$app/environment";
import { writable } from "svelte/store";

let cart
let cartStore : any

if(browser){

  if(localStorage.getItem('cart'))
  {
    // Load Data
    cart = JSON.parse(localStorage.getItem('cart') as string)
  }
  else
  {
    cart = {
      products : [
        // {
        //   id : 1,
        //   image : '/groc.jpg',
        //   name : 'product 1',
        //   price : '150',
        //   quantity: 2
        // },
        // {
        //   id : 2,
        //   image : '/groc.jpg',
        //   name : 'product 2',
        //   price : '200',
        //   quantity: 5
        // },
      ]
    }
    
    localStorage.setItem('cart',JSON.stringify(cart))
  }


  cartStore = writable(cart)

  cartStore.subscribe( (data : any) => {
    let products = JSON.stringify(data)
    localStorage.setItem('cart', products)
  })

}
export default cartStore;