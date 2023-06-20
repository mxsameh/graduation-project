import { json } from '@sveltejs/kit';
import type { RequestEvent } from '../$types';
import Products from '$lib/database/models/productsModel';

const productsTable = new Products();

export const GET = async (event: RequestEvent) => {
	let categoryName = event.params.categoryName;
	categoryName = categoryName.replaceAll('-', ' ');
	const products = await productsTable.getByCategory(categoryName);

	return json({ products });
};
