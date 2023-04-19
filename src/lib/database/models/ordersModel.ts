import type { PoolClient } from 'pg';
import db from '../db';

type Order = {
	id?: number;
	products?: [];
	date: string;
	time: string;
	shipping: number;
	subtotal: number;
	total: number;
	payment: string;
	buyerId: number;
};

const add = (conn: PoolClient, products: any, orderId: number) => {
	products.forEach((product: any) => {
		const sql = `INSERT	INTO order_products (order_id, product_id, quantity) VALUES ($1,$2,$3)`;
		const res = conn.query(sql, [orderId, product.id, product.quantity]);
	});
	conn.release();
};

const get = async (conn: PoolClient, orderId: number) => {
	const sql = `SELECT product_id as id, quantity FROM order_products WHERE order_id=$1`;
	const res = await conn.query(sql, [orderId]);
	conn.release();
	return res.rows;
};

const getProduct = async (conn: PoolClient, productId: number) => {
	const sql = `SELECT * FROM products WHERE id=$1`;
	const res = await conn.query(sql, [productId]);
	return res.rows[0];
};

export default class orders {
	async getAllUserOrders(userId: number): Promise<any> {
		try {
			const connection = await db.connect();
			let orders: any = [];
			const sql = `SELECT id FROM orders WHERE buyer_id=$1`;
			const res = await connection.query(sql, [userId]);
			const ordersIds = res.rows;
			ordersIds.forEach((item) => {
				orders.push(item.id);
			});

			connection.release();
			return orders;
			// const sql = `
			// select p.id, o.id
			// from products p, orders o, order_products op
			// where p.id=op.product_id and
			// o.id=op.order_id and
			// o.buyer_id=$1
			// group by o.id
			// `;
		} catch (err) {
			throw new Error(`Couldn't get order ${userId}\n${err}`);
		}
	}

	async getOrder(orderId: number): Promise<Order> {
		try {
			const connection = await db.connect();
			const sql = `SELECT * FROM orders WHERE id=$1`;
			const result = await connection.query(sql, [orderId]);

			let order = result.rows[0];
			const orderProducts = await get(connection, order.id);
			let products: any = [];

			for (const p of orderProducts) {
				let product = await getProduct(connection, p.id);
				product = {...product, quantity: p.quantity}
				products.push(product);
			}
			order = { ...order, products };

			return order;
		} catch (err) {
			throw new Error(`Couldn't get order ${orderId}\n${err}`);
		}
	}

	async create(newOrder: Order): Promise<Order> {
		try {
			const connection = await db.connect();
			const sql = `INSERT INTO orders (date, time, shipping, subtotal, total, payment, buyer_id) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *`;
			const result = await connection.query(sql, [
				newOrder.date,
				newOrder.time,
				newOrder.shipping,
				newOrder.subtotal,
				newOrder.total,
				newOrder.payment,
				newOrder.buyerId
			]);

			const order = result.rows[0];
			add(connection, newOrder.products, order.id);
			// connection.release();
			return order;
		} catch (err) {
			throw new Error(`Couldn't create order\n${err}`);
		}
	}

	async delete(orderId: number): Promise<Boolean> {
		try {
			const connection = await db.connect();
			const sql = `DELETE FROM orders WHERE id=$1`;
			const result = await connection.query(sql, [orderId]);

			connection.release();
			return true;
		} catch (err) {
			throw new Error(`Couldn't delete order ${orderId}\n${err}`);
		}
	}
}
