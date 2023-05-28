<script lang="ts">
	import Billing from '$lib/components/checkout/Billing.svelte';
	import OrderTotal from '$lib/components/checkout/OrderTotal.svelte';
	import cartStore from '$lib/stores/cart';
	import { addOrder } from '$lib/database/firebase/orders';
	import RequestsPopup from '$lib/components/checkout/RequestsPopup.svelte';

	export let data;
	let user = data.user;
	let isValidOrder: Boolean = true;
	let openedOffers = false;
	let order: any;

	// Get Address Info
	const getInfo = () => {
		const formEl = document.getElementById('billingForm') as HTMLFormElement;
		isValidOrder = formEl.checkValidity();
		let user_billing = {
			city: formEl.city.value,
			country: formEl.country.value,
			zip_code: parseInt(formEl.zipCode.value),
			location: formEl.address.value
		};
		return user_billing;
	};

	// Submit Order to DB
	const placeOrder = async (e: any) => {
		const user_billing = getInfo();
		if (!isValidOrder) return;
		let submittedOrder = e.detail.order;
		const products = submittedOrder.products;

		let status = 'pending';
		submittedOrder = {
			...submittedOrder,
			products,
			status,
			buyer_id: user.id,
			requests: [],
			seller_id: $cartStore.seller_id,
			address: { ...user_billing }
		};

		order = addOrder(submittedOrder);
		openedOffers = true;
	};

	const closeOffers = () => {
		openedOffers = false;
	};
</script>

<main class="main">
	{#if $cartStore}
		<Billing valid={isValidOrder} />
		<OrderTotal products={$cartStore.products} on:submitOrder={placeOrder} />
	{/if}

	{#if openedOffers}
		<RequestsPopup {closeOffers} {order} />
	{/if}
</main>

<style lang="scss">
	.main {
		display: flex;
		width: 100%;
		margin: 40px 0;
	}
</style>
