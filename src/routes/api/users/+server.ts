import Users from "$lib/database/models/usersModel";
import type {  User } from '$lib/database/models/usersModel'
import { json } from "@sveltejs/kit";
import type { RequestEvent } from "./$types";
import { comparePassword, hashPassword } from "$lib/utils/bcrypt";
import { createToken } from "$lib/utils/jwt";


const usersTable = new Users()

/**
 * GET REQUEST (/users)
 * 
 * INPUT : -
 * 
 * RETURNS : All users available in the database (buyer/seller/admin)
 * 
 */
export const GET = async(event : RequestEvent) =>
{
    const users = await usersTable.findAll()
    return json(users)
}

/**
 * POST REQUEST (/users)
 * 
 * INPUT : New user in the body of the request
 * 
 * RETURNS : Success if user is added successfully and also the user token to authorize the user
 *           Returns false if user wasn't added successfully
 * 
 */
export const POST = async (event : RequestEvent) =>
{
    try{
        const body = await event.request.json()
        const newUser = body.user
        // Hash the password to save hash passwords in the db
        newUser.password = hashPassword(newUser.password)
        const user = await usersTable.create(newUser)
        if(user.email == newUser.email )
        {
            const tokenData = newUser
            // Remove the password from the token for security
            delete tokenData.password
            // Create user token
            const userToken = createToken(tokenData)
            return json({success : true, userToken})
        }
    }
    catch(err: any)
    {
        return json({success : false, msg : err.message},{status:500})
    }
}

/**
 * DELETE REQUEST (/users)
 * 
 * INPUT : User id passed in the request params
 * 
 * RETURNS : True if user is deleted successfully 
 *           False if user wasn't deleted successfully
 * 
 */
export const DELETE = async (event:RequestEvent) =>
{
    // Get user id from the req params
    let id = parseInt(event.url.searchParams.get('id') as string)
    // Check if user exists in the db
    const user = await usersTable.findUser(id)
    let isUserDeleted;
    if(user)
    {
        // Delete user
        isUserDeleted = await usersTable.delete(id)
    }
    else
    {
        isUserDeleted = false
    }
    return json({ success: isUserDeleted })
}