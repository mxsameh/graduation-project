<script lang="ts">
	import { database } from '$lib/database/firebase/firebase';
	import { onValue, ref } from 'firebase/database';
	import Request from './Request.svelte';
	export let delivery: any;

	let orders: any = [];

	// GET THE PENDING OFFERS
	const ordersRef = ref(database, 'orders');
	onValue(ordersRef, (snapshoot) => {
		let data = snapshoot.val();
		if (!data) {
			orders = [];
			return;
		} else {
			orders = Object.values(data);
			orders = orders.filter((order: any) => order.status == 'pending');
		}
	});
</script>

{#if orders.length}
	<ul class="list">
		{#key orders}
			{#each orders as order}
				<Request {order} {delivery} />
			{/each}
		{/key}
	</ul>
{:else}
	<h1 class="title">No availble orders at the moment please check again later</h1>
{/if}

<style lang="scss">
	.title {
		text-align: center;
		max-width: 600px;
		margin: 40px auto;
		text-transform: capitalize;
	}
	.list {
		display: flex;
		width: 100%;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		padding: 24px;
		gap: 24px;
	}
</style>
