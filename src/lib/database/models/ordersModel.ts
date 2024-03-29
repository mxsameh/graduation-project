import type { PoolClient } from 'pg';
import db from '../db';

type Order = {
	id?: number;
	products?: [];
	date: string;
	time: string;
	shipping: number;
	taxes: number;
	subtotal: number;
	total: number;
	payment: string;
	status: string;
	delivery_id: number;
	buyer_id: number;
	seller_id: number;
	city: string;
	country: string;
	address: string;
	zip_code: number;
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
	const result = await conn.query(sql, [productId]);
	let product = result.rows[0];
	product.images = product.images.split(',');
	return product;
};

export default class orders {
	async getBuyerOrders(buyer_id: number): Promise<any> {
		try {
			const connection = await db.connect();
			let orders: any = [];
			const sql = `SELECT id FROM orders WHERE buyer_id=$1`;
			const res = await connection.query(sql, [buyer_id]);
			const ordersIds = res.rows;
			ordersIds.forEach((item) => {
				orders.push(item.id);
			});

			connection.release();
			return orders;
		} catch (err) {
			throw new Error(`Couldn't get order ${buyer_id}\n${err}`);
		}
	}

	async getSellerOrders(seller_id: number) {
		try {
			const connection = await db.connect();
			let orders: any = [];
			const sql = `SELECT id FROM orders WHERE seller_id=$1`;
			const res = await connection.query(sql, [seller_id]);
			const ordersIds = res.rows;
			ordersIds.forEach((item) => {
				orders.push(item.id);
			});

			connection.release();
			return orders;
		} catch (err) {
			throw new Error(`Couldn't get order ${seller_id}\n${err}`);
		}
	}

	async getDeliveryOrders(delivery_id: number) {
		try {
			const connection = await db.connect();
			let orders: any = [];
			const sql = `SELECT id FROM orders WHERE delivery_id=$1`;
			const res = await connection.query(sql, [delivery_id]);
			const ordersIds = res.rows;
			ordersIds.forEach((item) => {
				orders.push(item.id);
			});

			connection.release();
			return orders;
		} catch (err) {
			throw new Error(`Couldn't get orders of id: ${delivery_id}\n${err}`);
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
				product = { ...product, quantity: p.quantity };
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
			let connection = await db.connect();
			let sql = `INSERT INTO orders (date, time, shipping, subtotal, taxes, total, payment, status, delivery_id, buyer_id, seller_id, country, city, address, zip_code) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15) RETURNING *`;
			let result = await connection.query(sql, [
				newOrder.date,
				newOrder.time,
				newOrder.shipping,
				newOrder.subtotal,
				newOrder.taxes,
				newOrder.total,
				newOrder.payment,
				newOrder.status,
				newOrder.delivery_id,
				newOrder.buyer_id,
				newOrder.seller_id,
				newOrder.country,
				newOrder.city,
				newOrder.address,
				newOrder.zip_code
			]);

			const order = result.rows[0];
			add(connection, newOrder.products, order.id);
			return order;
		} catch (err) {
			throw new Error(`Couldn't create order\n${err}`);
		}
	}

	async updateStatus(status: string, orderId: number): Promise<any> {
		try {
			const connection = await db.connect();
			const sql = `UPDATE orders SET status = $1 WHERE id = $2`;
			const res = connection.query(sql, [status, orderId]);

			connection.release();
			return { success: true };
		} catch (error) {
			throw new Error(error);
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
