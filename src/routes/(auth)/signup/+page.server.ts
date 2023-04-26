import { redirect } from '@sveltejs/kit'

export const actions = {
    default : async (event) => 
    {
        // Get user from the form data
        const formData = await event.request.formData()
        const user =
        {
            name : formData.get('name') as string,
            email : formData.get('email') as string,
            password : formData.get('password') as string,
            phone : parseInt(formData.get('phone') as string)
        }

        // Send a Post request to the server to create the user
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
            // Create a cookie that contains the user token
            event.cookies.set('user token',data.userToken)
            const redirectPath = event.url.searchParams.get('redirectTo') || '/'
            throw redirect(303, redirectPath)
        }
    }
}  