import Users from '$lib/database/models/usersModel'
import { comparePassword } from '$lib/utils/bcrypt';
import { createToken } from '$lib/utils/jwt';
import { redirect } from '@sveltejs/kit';

const usersTable = new Users();

export const actions =
{
    default: async (event) =>
    {
        const data = await event.request.formData()
        const email = data.get('email') as string
        const password = data.get('password') as string

        const user = await usersTable.findUserByEmail(email)
        if(user)
        {
            const authenticated = comparePassword(password, user.password)
            if(authenticated)
            {
                const userData = 
                {
                    id : user.id,
                    email : user.email,
                    name : user.name,
                    phone : user.phone,
                    type : user.type
                }
                const userToken = createToken(userData);
                event.cookies.set('user token',userToken)

                const redirectPath = event.url.searchParams.get('redirectTo') || '/'
                throw redirect(303, redirectPath)

            }
        }
        return {failed : true, success : false, token: '' }
    }

}