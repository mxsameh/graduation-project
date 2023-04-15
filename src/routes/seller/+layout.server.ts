import { redirect } from '@sveltejs/kit';

export const load = (event) =>
{
    const user = event.locals.user;

    if(!user || user.type != 'seller')
    {
        throw redirect(307,'login?redirectTo=/seller')
    }
    return{
        seller:event.locals.user
    }
}