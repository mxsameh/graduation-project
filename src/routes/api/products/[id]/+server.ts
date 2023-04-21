import { json } from '@sveltejs/kit';
import type { RequestEvent } from './$types';
import Products from '$lib/database/models/productsModel';

const productsTable = new Products();

export const GET = async (e: RequestEvent) => {
	let idParam = e.params['id'];
	let id = parseInt(idParam);
	const product = await productsTable.getProduct(id);
	if (product) return json({ product });

	return json(`No product with id ${id}`, {
		status: 404
	});
};
