<script lang="ts">
	import { page } from '$app/stores';
	import Header from '$lib/components/seller/Header.svelte';
	import AddPopup from '$lib/components/seller/ProductPopup.svelte';
	import Dashboard from '$lib/components/admin/Dashboard.svelte';

	export let data;

	const seller = data.seller;
	const sellerToken = data.sellerToken;
	const url = $page.url.origin + `/api/sellers/${seller.id}`;
	const origin = $page.url.origin;
	let productAdded: Boolean;

	let isPopupOpened = false;

	let tabs = [
		{ name: 'products', itemsUrl: `${url}/products` },
		{ name: 'orders', itemsUrl: `${url}/orders` }
	];

	const handleAddClick = () => {
		// open popup
		isPopupOpened = true;
	};

	const handleClose = () => {
		isPopupOpened = false;
	};
	const handleSubmit = async (e: any) => {
		const newProduct = { ...e.detail.product, seller_id: seller.id };

		const req = await fetch(`${origin}/api/products`, {
			method: 'POST',
			body: JSON.stringify({ product: newProduct })
		});
		const res = req.json();
		res.then((data) => {
			if (data.success) handleClose();
			productAdded = !productAdded
		});
	};
</script>

<Header on:addButtonClicked={handleAddClick} />
{#if isPopupOpened}
	<AddPopup close={handleClose} on:submitClicked={handleSubmit} />
{/if}

<main class="main">
	{#key productAdded}
	<Dashboard {tabs} token={sellerToken} />
	{/key}
</main>

<style lang="scss">
	.main {
		width: 100%;
		height: calc(100vh - 80px);
	}
</style>
