import { browser } from '$app/environment';
import { writable } from 'svelte/store';

let cart;
let cartStore: any;

export const clearCart = () => {
	if (browser) localStorage.removeItem('cart');
};

if (browser) {
	if (localStorage.getItem('cart')) {
		// Load Data
		cart = JSON.parse(localStorage.getItem('cart') as string);
	} else {
		cart = {
			seller_id: -1,
			products: []
		};
		localStorage.setItem('cart', JSON.stringify(cart));
	}

	cartStore = writable(cart);

	cartStore.subscribe((data: any) => {
		let cart = JSON.stringify(data);

		localStorage.setItem('cart', cart);
	});
}
export default cartStore;
