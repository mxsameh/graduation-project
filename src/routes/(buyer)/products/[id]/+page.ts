import products from "$lib/stores/products";
import { get } from "svelte/store";
import type { PageLoad } from "./$types";

const getProduct = (id : number) =>
{
  const productsData = get(products)
  const product = productsData.filter( product => product.id == id)
  return product[0]
}

export const load : PageLoad = ({ params }) =>
{
  let id = parseInt(params.id)

  const product = getProduct(id)

  return{
    product
  }
}