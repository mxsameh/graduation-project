import Users from "$lib/database/models/usersModel";
import type {  User } from '$lib/database/models/usersModel'
import { json } from "@sveltejs/kit";
import type { RequestEvent } from "./$types";
import { comparePassword, hashPassword } from "$lib/utils/bcrypt";
import { createToken } from "$lib/utils/jwt";


const usersTable = new Users()

export const GET = async(event : RequestEvent) =>
{
    const users = await usersTable.findAll()
    return json(users)
}

export const POST = async (event : RequestEvent) =>
{
    try{
        const body = await event.request.json()
        console.log(body);
        const newUser = body.user
        newUser.password = hashPassword(newUser.password)
        const user = await usersTable.create(newUser)
        if(user.email == newUser.email )
        {
            const tokenData = newUser
            delete tokenData.password
            const userToken = createToken(tokenData)
            return json({success : true, userToken})
        }
    }
    catch(err: any)
    {
        return json({success : false, msg : err.message},{status:500})
    }
}

export const DELETE = async (event:RequestEvent) =>
{
    const id = parseInt(event.url.searchParams.get('id') as string)
    const user = await usersTable.findUser(id)
    let isUserDeleted;
    if(user)
    {
        isUserDeleted = await usersTable.delete(id)
    }
    else
    {
        isUserDeleted = false
    }
    return json({ isUserDeleted })
}