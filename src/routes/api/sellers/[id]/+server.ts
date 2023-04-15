import Users from "$lib/database/models/usersModel.js";
import { json } from "@sveltejs/kit";

const usersTable = new Users();

export const GET = async ( event ) =>
{
    const id = parseInt( event.params.id )
    const seller = await usersTable.findSeller(id)
    delete seller.password

    return json({ seller })
}