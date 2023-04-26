<script lang="ts">
	import Order from '$lib/components/orders-page/Order.svelte';

	interface Iorder {
		id: number;
		date: string;
		time: string;
		products: [];
		shipping: number;
		total: number;
	}

	export let data;
	const orders = data.orders;
</script>

<h1 class="title">orders</h1>
{#if orders.length == 0}
	<div class="no-orders">
		<h1 class="title">You haven't placed any orders yet!!</h1>
	</div>
{:else}
	<ul class="orders-list">
		{#each orders as order}
			<Order {order} />
		{/each}
	</ul>
{/if}

<style lang="scss">
	.no-orders {
		width: 100%;
		min-height: 50vh;
		.title {
			color: #555;
			font-size: 24px;
			text-transform: capitalize;
		}
	}
	.title {
		font-size: 32px;
		padding: 24px;
		text-transform: uppercase;
		text-align: center;
	}
	.orders-list {
		min-height: 70vh;
		padding: 24px;
		display: flex;
		flex-direction: column;
		gap: 24px;
	}
</style>
