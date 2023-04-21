import Products from '$lib/database/models/productsModel';
import { json } from '@sveltejs/kit';
import type { RequestEvent } from '../users/$types';

const productsTable = new Products();

export const GET = async (event: RequestEvent) => {
	try {
		const category = event.url.searchParams.get('category');
		const sellerId = parseInt(event.url.searchParams.get('seller') as string);
		let products;
		if (category) {
			products = await productsTable.getByCategory(category);
		} else if (sellerId) {
			products = await productsTable.getBySeller(sellerId);
		} else {
			products = await productsTable.getAll();
		}

		return json(products);
	} catch (err: any) {
		return json({ success: false, message: err.message }, { status: 500 });
	}
};

export const POST = async (event: RequestEvent) => {
	// const auth = event.request.headers.get("Authorization")?.split(' ')[1]
	// const cook = event.cookies.get('user')
	try {
		const body = await event.request.json();
		const product = body.product;

		const newProduct = await productsTable.createProduct(product);
		return json({ success: true });
	} catch (err: any) {
		return json(
			{ success: false, message: err.message },
			{
				status: 500
			}
		);
	}
};

export const PUT = async (event: RequestEvent) => {
	const body = await event.request.json();
	const editedProduct = body.product;
	const response = await productsTable.editProduct(editedProduct);

	return json(response);
};

export const DELETE = async (event: RequestEvent) => {
	try {
		let id = parseInt(event.url.searchParams.get('id') as string);
		const isDeleted = await productsTable.deleteProduct(id);
		return json({ success: true });
	} catch (err: any) {
		return json({ success: false, msg: err.message }, { status: 500 });
	}
};
