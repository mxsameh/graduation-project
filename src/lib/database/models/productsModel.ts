import db from "../db"

type Product =
{
    id? : number
    name : string
    price : number
    image : string
    category : string
    sellerId : number
}

/**
 ***** FIND ALL ****
 * Input ==> -
 * Output ==> All products available in any category
 */

export default class Products
{
    async findAll() : Promise<Product[]>
    {
        try
        {
            const connection = await db.connect()
            const sql = `SELECT * FROM products`
            const result = await connection.query(sql)
            const products =  result.rows

            connection.release()
            return products
        }
        catch(err)
        {
            throw new Error(`Couldn't find all products\n${err}`);
        }
    }

    /**
     ***** FIND BY CATEGORY ****
    * Input ==> Category name
    * Output ==> All products available in a category
    */
    async findByCategory( category : string ) : Promise<Product[]>
    {
        try
        {
            const connection = await db.connect()
            const sql = `SELECT * FROM products WHERE category=$1`
            const result = await connection.query(sql, [category])
            const products =  result.rows

            connection.release()
            return products
        }
        catch(err)
        {
            throw new Error(`Couldn't find all products\n${err}`);
        }
    }

    /**
     ***** FIND BY SELLER ****
    * Input ==> Seller id
    * Output ==> All products available listed by a seller
    */
    async findBySeller( sellerId : number ) : Promise<Product[]>
    {
        try
        {
            const connection = await db.connect()
            const sql = `SELECT * FROM products WhERE seller_id=$1`
            const result = await connection.query(sql, [sellerId])

            connection.release()
            return result.rows
        }
        catch(err)
        {
            throw new Error(`Cou'dn't find all products\n${err}`)

        }
    }

    /**
     ***** FIND PRODUCT ****
    * Input ==> Product id
    * Output ==> Product with a certain id
    */
    async findProduct( productId : number ) : Promise<Product>
    {
        try
        {
            const connection = await db.connect()
            const sql = `SELECT * FROM products WHERE id=$1`
            const result = await connection.query(sql,[productId])
            const product =  result.rows[0]

            connection.release()
            return product

        } catch (err) {
            throw new Error(`Couldn't find product ${productId}\n${err}`);
        }
    }

    /**
     ***** CREATE PRODUCT ****
    * Input ==> Product
    * Output ==> Created Product
    */
    async createProduct( newProduct : Product ) : Promise<Product>
    {
        try
        {
            const connection = await db.connect()
            const sql = `INSERT INTO products (name, price, image, category, seller_id) VALUES ($1, $2, $3, $4, $5) RETURNING *`
            const result = await connection.query(sql, [newProduct.name, newProduct.price, newProduct.image, newProduct.category, newProduct.sellerId])
            const product =  result.rows[0]

            connection.release()
            return product

        } catch (err) {
           throw new Error(`Couldn't create product\n${err}`) 
        }
    }

    /**
     ***** EDIT PRODUCT ****
    * Input ==> Product
    * Output ==> Boolean true if updated & false if not updated
    */

    async editProduct( product : Product)
    {
        try {
            const connection = await db.connect()
            const sql = `UPDATE products SET name=$1, price=$2, image=$3, category=$4 WHERE id=$4`
            const result = await connection.query(sql, [product.name, product.price, product.image, product.category, product.id])
            return {success : true}
        } catch (err) {
            throw new Error(`Couldn't update product ${product.id}\n${err}`)
        }

    }
    /**
     ***** DELETE PRODUCT ****
    * Input ==> Product id
    * Output ==> True if deleted, false if not
    */
    async deleteProduct ( productId : number) : Promise<Boolean>
    {
        try {
            const connection = await db.connect()
            const sql = `DELETE FROM products WHERE id=$1`
            const result = await connection.query(sql, [productId])

            connection.release()
            return true
        } catch (err) {
           throw new Error(`Couldn't delete product ${productId}\n${err}`) 
        }
    }


}