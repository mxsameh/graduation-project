import Users from '$lib/database/models/usersModel';
import { comparePassword } from '$lib/utils/bcrypt';
import { createToken } from '$lib/utils/jwt';
import { fail, redirect } from '@sveltejs/kit';

const usersTable = new Users();

export const actions = {
	default: async (event) => {
		// Get data (email, password) when form submitted
		const data = await event.request.formData();
		const email = data.get('email') as string;
		const password = data.get('password') as string;

		// Check if there is a redirection after login if not goto home page
		let loginType = event.url.searchParams.get('redirectTo')?.replace('/', '') || 'buyer'

		// Get user from the data base
		const user = await usersTable.findUserByEmail(email);

		// if user is found
		if (user) {
			// compare the entered password to the hashed password found in database
			const authenticated = comparePassword(password, user.password as string);
			if (authenticated) {
				const userData = {
					id: user.id,
					email: user.email,
					name: user.name,
					phone: user.phone,
					type: user.type
				};
				if (userData.type != loginType && (loginType == 'seller' || loginType == 'admin')) {
					return fail(400, { invalid: true });
				}
				// create user jwt token
				const userToken = createToken(userData);
				// set cookie that contains the user token
				event.cookies.set('user token', userToken);

				const redirectPath = event.url.searchParams.get('redirectTo') || '/';
				throw redirect(303, redirectPath);
			}
		}
		return { failed: true, success: false, token: '' };
	}
};
