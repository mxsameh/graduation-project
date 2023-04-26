import { json } from '@sveltejs/kit';
import type { RequestEvent } from './$types';
import orders from '$lib/database/models/ordersModel';
import { decodeToken } from '$lib/utils/jwt';

const ordersTable = new orders();

export const GET = async (e: RequestEvent) => {
	const authHeader = e.request.headers.get('authorization');
	const userToken = authHeader?.split(' ')[1];
	const user: any = decodeToken(userToken as string);
	const id = user?.id;

	const seller_id = parseInt(e.params.id);

	const orderIds = await ordersTable.getSellerOrders(seller_id);
	let orders: any = [];
	for (const id of orderIds) {
		const order = await ordersTable.getOrder(id);
		orders.push(order);
	}
	return json(orders);
};
