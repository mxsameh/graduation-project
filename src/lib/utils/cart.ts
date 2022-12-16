import Cart from "$lib/stores/cart";
import { get } from "svelte/store";

let cart = get(Cart)

const getSubtotal = ( products : any) : number =>
{
  let subtotal = 0;

  products.forEach( (product:any) =>
    {
      let productPrice = product.price;
      let productQuantity = product.quantity;
      let totalPrice = productPrice * productQuantity;

      subtotal += totalPrice;
    })

    return subtotal
}
const removeProduct = (products : any, id : number) =>
{
  const newProducts = products.filter((prod:any) => prod.id != id);

  return newProducts;
}
const addProduct = (product : any, quantity : number) =>
{
  let cartItems = cart.products
  let itemIndex = getCartItemIndex(product);
  if(itemIndex != -1)
  {
    let item = cartItems[itemIndex];
    item.quantity += quantity;
  }
  else
  {
    let item = toCartItem(product,quantity)
    cartItems.push(item)
  }
}

const getCartItemIndex = (product : any) =>
{
  let cartItems = cart.products
  let index = -1;
  cartItems.forEach((item: any, i: number) =>
    {
      if(item.id == product.id) index = i
    })
    console.log( index );
    return index
}

const toCartItem = (product : any, quantity : number) =>
{
  let cartItem = {
    id: product.id,
    image: product.images[0],
    name: product.name,
    price: product.price,
    quantity: quantity,
  }
  return cartItem
}


export {getSubtotal, removeProduct, addProduct};