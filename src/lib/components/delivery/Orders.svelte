<script lang="ts">
	import { onMount } from 'svelte';
	import { page } from '$app/stores';
	import OrderCard from './OrderCard.svelte';

	export let delivery: any;
	let orders: any = [];

	// DELIVERY ORDERS API ENDPOINT
	const origin = $page.url.origin;
	const url = `${origin}/api/delivery/${delivery.id}/orders`;

	// FETCH DELIVERY ORDERS
	const getData = async () => {
		const response = await fetch(url);
		const data = await response.json();
		return data;
	};

	onMount(() => {
		getData().then((data) => (orders = data));
	});
</script>

<ul class="list">
	{#each orders as order}
		<OrderCard {order} />
	{/each}
</ul>

<style lang="scss">
	.list {
		display: flex;
		width: 100%;
		flex-direction: column;
		padding: 24px;
		gap: 24px;
	}
</style>
