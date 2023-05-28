<script lang="ts">
	import { page } from '$app/stores';
	import Dashboard from '$lib/components/delivery/Dashboard.svelte';
	import Header from '$lib/components/admin/Header.svelte';

	export let data;
	const delivery = data.delivery;
	const deliveryToken = data.deliveryToken;
	const origin = $page.url.origin;
	const url = `${origin}/api/delivery/${delivery.id}`;

	const offerTest = {
		from: 'this is the seller location for the order',
		to: 'this is the buyer location for the order',
		price: 220
	};

	const tabs = [
		{ name: 'orders', items: [] },
		{ name: 'requests', items: [offerTest] }
	];
</script>

<Header name={delivery.name} />
<main class="main">
	<Dashboard {tabs} {delivery} />
</main>

<style lang="scss">
	.main {
		width: 100%;
		height: calc(100vh - 80px);
	}
</style>
