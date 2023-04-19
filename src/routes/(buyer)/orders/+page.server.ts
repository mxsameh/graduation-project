import type { ServerLoadEvent } from '@sveltejs/kit';

export const load = async (e: ServerLoadEvent) => {
    const userToken = e.locals.userToken

	const url = `${e.url.origin}/api/orders`;
	const resopnse = await fetch(url, {
		method: 'GET',
		headers: {
            "Authorization" : `Bearer ${userToken}`
        }
	});
    const orders = await resopnse.json()

    return {orders}
};
