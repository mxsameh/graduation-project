import cartStore from '$lib/stores/cart';
import { get } from 'svelte/store';

const getSubtotal = (products: any): number => {
	let subtotal = 0;

	products.forEach((product: any) => {
		let productPrice = product.price;
		let productQuantity = product.quantity;
		let totalPrice = productPrice * productQuantity;

		subtotal += totalPrice;
	});

	return subtotal;
};
const removeProduct = (id: number) => {
	let cartItems = get(cartStore).products;
	const newCartItems = cartItems.filter((prod: any) => prod.id != id);
	let seller_id = newCartItems.length == 0 ? -1 : get(cartStore).seller_id;
	let cart = { seller_id, products: newCartItems };
	cartStore.set(cart);
};

const getCartItemIndex = (cart: any, product: any) => {
	let cartItems = cart.products;
	let index = -1;
	cartItems.forEach((item: any, i: number) => {
		if (item.id == product.id) index = i;
	});
	return index;
};

const toCartItem = (product: any, quantity: number) => {
	let cartItem = {
		id: product.id,
		image: product.images[0],
		name: product.name,
		price: product.price,
		quantity: quantity
	};
	return cartItem;
};

export { getSubtotal, removeProduct, getCartItemIndex, toCartItem };
