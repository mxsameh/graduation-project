import { decodeToken } from '$lib/utils/jwt'

export const handle = async ( { event, resolve } ) =>
{
    const userToken = event.cookies.get('user token') || ''
    const user = decodeToken(userToken)
    event.locals.user = user
    return resolve(event)
}