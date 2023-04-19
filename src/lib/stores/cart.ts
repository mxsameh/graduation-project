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
      products : []
    }
    localStorage.setItem('cart',JSON.stringify(cart))
  }


  cartStore = writable(cart)

  cartStore.subscribe( (data : any) => {
    let products = JSON.stringify(data)
    localStorage.setItem('cart', products)
    // console.table(data.products);
  })

}
export default cartStore;