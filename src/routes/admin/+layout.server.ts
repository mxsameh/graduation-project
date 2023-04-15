import { redirect } from '@sveltejs/kit';

export const load = (event) =>
{
    const user = event.locals.user;

    if(!user || user.type != 'admin')
    {
        throw redirect(307,'login?redirectTo=/admin')
    }
    return{
        admin:event.locals.user
    }
}