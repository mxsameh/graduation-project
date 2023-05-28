<script lang="ts">
	import { page } from '$app/stores';
	import OrderBody from '../orders-page/OrderBody.svelte';
	import OrderHeader from '../orders-page/OrderHeader.svelte';
	export let order: any;

	let delivered = order.status == 'delivered';

	const origin = $page.url.origin;
	const url = `${origin}/api/orders`;

	// SEND A PATCH REQUEST TO UPDATE ORDER STATUS
	const updateOrderStatus = async () => {
		const body = {
			orderId: order.id,
			status: 'delivered'
		};
		const req = await fetch(url, {
			method: 'PATCH',
			body: JSON.stringify(body)
		});
		const res = await req.json();
		if (res.success == true) {
			delivered = true;
		}
	};

	const handleClick = () => {
		updateOrderStatus();
	};
</script>

<div class={delivered ? 'order delivered' : 'order'}>
	<OrderHeader
		orderDate={order.date}
		orderTime={order.time}
		orderTotal={order.total}
		orderShipping={order.shipping}
		orderTaxes={order.taxes}
		{delivered}
	/>
	<OrderBody products={order.products} />
	{#if !delivered}
		<button class="deliveredBtn" on:click={handleClick}>delivered</button>
	{/if}
</div>

<style lang="scss">
	.order {
		width: 100%;
		border: 2px solid var(--color-3);
		border-radius: 12px;
		overflow: hidden;
	}
	.delivered {
		border: 2px solid #aaa;
	}
	.deliveredBtn {
		display: block;
		margin: 24px auto;
		text-transform: uppercase;
		font-weight: 600;
		padding: 10px 32px;
		border-radius: 8px;
		background-color: var(--color-3);
		cursor: pointer;
	}
</style>
