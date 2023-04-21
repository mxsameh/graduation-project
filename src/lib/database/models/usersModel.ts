import db from '../db'


/**
 * TYPE USER
 */
export type User =
{
    id? : number
    email : string
    password? : string
    name : string
    phone : number
    type? : string
}

/**
 * CLASS USERS
 */

export default class Users
{
    async findAll() : Promise <User[]>
    {
        try
        {
            const connection = await db.connect()
            const sql = `SELECT * FROM users`
            const result = await connection.query(sql)

            connection.release()
            return result.rows
        }
        catch(err)
        {
            throw new Error(`couldn't find all users\nERROR: ${err}`)
        }

    }

    async findAllSellers() : Promise<User[]>
    {
        try
        {
            const connection = await db.connect()
            const sql = `SELECT * FROM users WHERE type='seller'`
            const result = await connection.query(sql)

            connection.release()
            return result.rows
        }
        catch(err)
        {
            throw new Error(`couldn't find all users\nERROR: ${err}`)
        }
    }
    
    async findUser(id : number) : Promise <User>
    {
        try
        {
            const connection = await db.connect()
            const sql = `SELECT * FROM users WHERE id=$1`
            const result = await connection.query(sql, [id])

            connection.release()
            return result.rows[0]
        }
        catch(err)
        {
            throw new Error(`couldn't find seller\nERROR: ${err}`)
        }

    }

    async findUserByEmail( email : string ) : Promise <User>
    {
        try
        {
            const connection = await db.connect()
            const sql = `SELECT * FROM users WHERE email=$1`
            const result = await connection.query(sql, [email])

            connection.release()
            return result.rows[0]
        }
        catch(err)
        {
            throw new Error(`couldn't find user\nERROR: ${err}`)
        }
    }

    async create( user : User) : Promise <User>
    {
        try{
            const connection = await db.connect()
            const sql = `INSERT INTO users (email, password, name, phone, type) VALUES ($1,$2,$3,$4,$5) RETURNING *`
            const result = await connection.query(sql,[user.email, user.password, user.name, user.phone, user.type])

            connection.release()
            return result.rows[0]
        }
        catch(err)
        {
            throw new Error(`couldn't create new user\nERROR: ${err}`)
        }
    }

    async delete( email : string ) : Promise <Boolean>
    {
        try
        {
            const connection = await db.connect()
            const sql = `DELETE FROM users WHERE email=$1`
            const result = await connection.query(sql, [email])

            connection.release()
            return true
        }
        catch(err)
        {
            throw new Error(`couldn't delete user\nERROR: ${err}`)
        }


    }
}



