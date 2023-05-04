<script lang="ts">
	import { goto } from '$app/navigation';
	import { page } from '$app/stores';
	import Billing from '$lib/components/checkout/Billing.svelte';
	import OrderTotal from '$lib/components/checkout/OrderTotal.svelte';
	import cartStore, { clearCart } from '$lib/stores/cart';

	export let data;
	let user = data.user;
	let isValidOrder : Boolean = true;

	const addOrder = async (order: any) => {
		clearCart();
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
		let user_billing = getInfo();
		if(!isValidOrder) return
		let order = e.detail.order;
		let products = order.products.map((p: any) => {
			return { id: p.id, quantity: p.quantity };
		});

		let delivery_id = 4;
		let status = 'preparing';
		order = {
			...order,
			products,
			status,
			delivery_id,
			buyer_id: user.id,
			seller_id: $cartStore.seller_id,
			...user_billing
		};

		// add order to db
		addOrder(order).then((data) => {
			goto('/orders');
		});
	};
	const getInfo = () => {
		const formEl = document.getElementById('billingForm') as HTMLFormElement;
		isValidOrder = formEl.checkValidity();
		let user_billing = {
			city: formEl.city.value,
			country: formEl.country.value,
			zip_code: parseInt(formEl.zipCode.value),
			address: formEl.address.value
		};
		return user_billing;
	};
</script>

<main class="main">
	{#if $cartStore}
		<Billing valid={isValidOrder} />
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
