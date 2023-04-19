import db from '../db';

interface IorderProduct {
	id?: number;
	orderId: number;
	productId: number;
	quantity: number;
}

export default class OrderProduct {
	async create(orderProduct: IorderProduct): Promise<IorderProduct> {
		try {
			const connection = await db.connect();
			const sql = `INSERT INTO order_products (order_id, product_it, quantity) RETURNING *`;
			const result = await connection.query(sql, [
				orderProduct.orderId,
				orderProduct.productId,
				orderProduct.quantity
			]);

			connection.release();
			return result.rows[0];
		} catch (err) {
			throw new Error(`couldn't create product \n ${err}`);
		}
	}

	async getOrderProducts(orderId: number): Promise<number[]> {
		try {
			const connection = await db.connect();
			const sql = `SELECT product_id FROM order_products WHERE order_id=$1`;
			const result = await connection.query(sql, [orderId]);

			connection.release();
			return result.rows;
		} catch (err) {
			throw new Error(`couldn't create product \n ${err}`);
		}
	}
}
