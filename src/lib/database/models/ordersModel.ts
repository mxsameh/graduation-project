import db from "../db"

type Order =
{
    id? : number
    total : number
    buyer_id : number
}

export default class orders {
    async getOrder(orderId : number) : Promise<Order>
    {
        try
        {
            const connection = await db.connect()
            const sql = `SELECT * WHERE id=$1`
            const result = await connection.query(sql, [orderId])

            connection.release()
            const order = result.rows[0]

            return order
        }
        catch(err)
        {
            throw new Error(`Couldn't get order ${orderId}\n${err}`)
        }

    }

    async create(newOrder : Order) : Promise<Order>
    {
        try
        {
            const connection = await db.connect()
            const sql = `INSERT INTO orders (total, buyer_id) VALUES ($1, $2) RETURNING *`
            const result = await connection.query(sql, [newOrder.total, newOrder.buyer_id])

            connection.release()
            const order = result.rows[0]

            return order
            
        }
        catch(err)
        {
            throw new Error(`Couldn't create order\n${err}`)
        }

    }

    async delete(orderId : number) : Promise<Boolean>
    {
        try
        {
            const connection = await db.connect()
            const sql = `DELETE FROM orders WHERE id=$1`
            const result = await connection.query(sql, [orderId])

            connection.release()
            return true
        }
        catch(err)
        {
            throw new Error(`Couldn't delete order ${orderId}\n${err}`)
        }
    }


}