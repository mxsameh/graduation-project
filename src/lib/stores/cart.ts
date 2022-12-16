import { writable } from "svelte/store";

const data = 
{
  products :[
    {
      id : 1,
      image : '/groc.jpg',
      name : 'product 1',
      price : '150',
      quantity: 2
    },
    {
      id : 2,
      image : '/groc.jpg',
      name : 'product 2',
      price : '200',
      quantity: 5
    },
    {
      id : 3,
      image : '/groc.jpg',
      name : 'product 3',
      price : '50',
      quantity: 3
    },
    {
      id : 4,
      image : '/groc.jpg',
      name : 'product 4',
      price : '340',
      quantity: 1
    }
  ],
};


const Cart = writable(data)

export default Cart;