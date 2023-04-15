import { redirect } from '@sveltejs/kit'

export const actions = {
    default : async (event) => 
    {
        const formData = await event.request.formData()
        const user =
        {
            name : formData.get('name') as string,
            email : formData.get('email') as string,
            password : formData.get('password') as string,
            phone : parseInt(formData.get('phone') as string)
        }

        const response = await event.fetch('/api/users',{
            method : "POST",
            body : JSON.stringify({user}),
            headers : {
                'Content-Type' : 'application/json'
            }
        })
        const data = await response.json()
        if(data.success)
        {
            event.cookies.set('user token',data.userToken)
            const redirectPath = event.url.searchParams.get('redirectTo') || '/'
            throw redirect(303, redirectPath)
        }
        console.log(data);
    }
}  