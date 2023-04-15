import Products from '$lib/database/models/productsModel.js'
import { json } from '@sveltejs/kit'

const productsTable = new Products()

export const GET = async ( event ) =>
{
    const sellerId = parseInt( event.params.id )
    const products = await productsTable.findBySeller( sellerId )
    return json({products})
}