import Users from '$lib/database/models/usersModel';
import { comparePassword } from '$lib/utils/bcrypt';
import { createToken } from '$lib/utils/jwt';
import { fail, redirect } from '@sveltejs/kit';

const usersTable = new Users();

export const actions = {
	default: async (event) => {
		const data = await event.request.formData();
		const email = data.get('email') as string;
		const password = data.get('password') as string;

		let loginType = event.url.searchParams.get('redirectTo')?.replace('/', '') || 'buyer'

		const user = await usersTable.findUserByEmail(email);

		if (user) {
			const authenticated = comparePassword(password, user.password as string);
			if (authenticated) {
				const userData = {
					id: user.id,
					email: user.email,
					name: user.name,
					phone: user.phone,
					type: user.type
				};
				if (userData.type != loginType && userData.type == 'buyer') {
                    console.log('wrong type');
					return fail(400, { invalid: true });
				}
				const userToken = createToken(userData);
				event.cookies.set('user token', userToken);

				const redirectPath = event.url.searchParams.get('redirectTo') || '/';
				throw redirect(303, redirectPath);
			}
		}
		return { failed: true, success: false, token: '' };
	}
};
