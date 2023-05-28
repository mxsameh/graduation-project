import { fail, redirect } from '@sveltejs/kit';

export const load = (event) =>
{
    const user = event.locals.user;

    if(!user || user.type != 'delivery')
    {
        fail(400, {credentials: true})
        throw redirect(307,'login?redirectTo=/delivery')
    }
    return{
        deliveryToken : event.locals.userToken,
        delivery:event.locals.user
    }
}