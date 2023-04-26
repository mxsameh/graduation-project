<script lang="ts">
	import { goto } from '$app/navigation';
	import { page } from '$app/stores';
	import Billing from '$lib/components/checkout/Billing.svelte';
	import OrderTotal from '$lib/components/checkout/OrderTotal.svelte';
	import cartStore, { clearCart } from '$lib/stores/cart';

	export let data;
	let user = data.user;

	const addOrder = async (order: any) => {
		clearCart()
		const url = $page.url.origin + '/api/orders';
		const req = await fetch(url, {
			method: 'POST',
			body: JSON.stringify({ order }),
			headers: {
				'Content-Type': 'application/json'
			}
		});
		const response = await req.json();
	};

	const submitOrder = async (e: any) => {
		let order = e.detail.order;
		let products = order.products.map((p: any) => {
			return { id: p.id, quantity: p.quantity };
		});
		order = { ...order, products, buyer_id: user.id, seller_id: $cartStore.seller_id };

		// add order to db
		addOrder(order).then((data) => {
			goto('/orders');
		});
	};
</script>

<main class="main">
	{#if $cartStore}
		<Billing />
		<OrderTotal products={$cartStore.products} on:submitOrder={submitOrder} />
	{/if}
</main>

<style lang="scss">
	.main {
		display: flex;
		width: 100%;
		margin: 40px 0;
	}
</style>
