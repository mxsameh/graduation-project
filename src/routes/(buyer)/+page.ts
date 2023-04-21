import type { PageLoadEvent } from "./$types";

export const load = async ( {fetch, url} : PageLoadEvent ) =>
{
    const origin = url.origin
    const req = await fetch(`${origin}/api/products`)
    const products = await req.json()

    return {products}
}