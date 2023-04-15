import { Pool } from 'pg';
import { DB_HOST, DB_PORT, DB_USER, DB_NAME, DB_PASSWORD } from '$env/static/private';



const dbDetails = {
    host : DB_HOST,
    // port : DB_PORT,
    user : DB_USER,
    database : DB_NAME,
    password : DB_PASSWORD
}

const db = new Pool( dbDetails )


export default db