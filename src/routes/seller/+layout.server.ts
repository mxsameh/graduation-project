import { fail, redirect } from '@sveltejs/kit';

export const load = (event) =>
{
    const user = event.locals.user;

    if(!user || user.type != 'seller')
    {
        fail(400, {credentials: true})
        throw redirect(307,'login?redirectTo=/seller')
    }
    return{
        sellerToken : event.locals.userToken,
        seller:event.locals.user
    }
}