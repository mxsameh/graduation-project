import Users from "$lib/database/models/usersModel";
import { json } from "@sveltejs/kit";
import type { RequestHandler } from "./$types";

const usersTable = new Users()

export const GET = async ( event : RequestHandler ) =>
{
    let sellers = await usersTable.findAllSellers()
    sellers = sellers.map( seller => {
        delete seller.password
        return seller
    })
    return json(sellers)
}