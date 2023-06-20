import type { PageLoad } from '../$types';

export const load: PageLoad = async ({ params, url, fetch }) => {
	const category = params?.category;
	const origin = url.origin;

	const req = await fetch(`${origin}/api/categories/${category}`);
	const res = await req.json();
	const products = res.products;

	return {
		products,
		category
	};
};
