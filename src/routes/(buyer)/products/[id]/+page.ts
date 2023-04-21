import type { PageLoad } from "./$types";

export const load : PageLoad = async ({ params, url, fetch }) =>
{
  const id = parseInt(params.id)
  const origin = url.origin

  const req = await fetch(`${origin}/api/products/${id}`)
  const res = await req.json()
  const product = res.product

  return{
    product
  }
}