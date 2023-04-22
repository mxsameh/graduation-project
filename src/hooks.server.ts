import UserStore from '$lib/stores/userStore'
import { decodeToken } from '$lib/utils/jwt'
import type { JwtPayload } from 'jsonwebtoken'

export const handle = async ( { event, resolve } ) =>
{
    const userToken = event.cookies.get('user token') || ''
    const user = decodeToken(userToken)
    event.locals.user = user
    event.locals.userToken = userToken

    UserStore.set(user as JwtPayload)
    return resolve(event)
}