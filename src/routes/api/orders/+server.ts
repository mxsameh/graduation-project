import { json } from '@sveltejs/kit';
import type { RequestEvent } from './$types';
import orders from '$lib/database/models/ordersModel';
import { decodeToken } from '$lib/utils/jwt';

const ordersTable = new orders();

export const GET = async (e: RequestEvent) => {
	const authHeader = e.request.headers.get('authorization');
	const userToken = authHeader?.split(' ')[1];
    const user : any = decodeToken(userToken as string)

	const id = user.id
	const orderIds = await ordersTable.getAllUserOrders(id);
	let orders: any = [];
	for (const id of orderIds) {
		const order = await ordersTable.getOrder(id);
		orders.push(order);
	}
    return json(orders)
};

export const POST = async (e: RequestEvent) => {
	try {
		const body = await e.request.json();
		const order = body.order;
		const x = await ordersTable.create(order);
		return json({ success: true });
	} catch (err) {
		return json({ success: false, msg: err.message });
	}
};
