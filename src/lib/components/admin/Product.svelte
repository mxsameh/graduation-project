<script lang="ts">
	import { page } from '$app/stores';
	import ProductCta from '../seller/ProductCta.svelte';
	import EditPopup from '../seller/ProductPopup.svelte';

	export let product: any;

	let productEl: HTMLElement;
	let isPopupOpened = false;
	const origin = $page.url.origin + '/api/products';
	const productId = product.id;

	const deleteProduct = async () => {
		const response = await fetch(`${origin}/?id=${productId}`, {
			method: 'DELETE'
		});
		const respnoseData = await response.json();
		const isDeleted = respnoseData.success;
		if (isDeleted) productEl.remove();
	};

	const saveEdits = async (e: any) => {
		product = e.detail.product;
		const respone = await fetch(`${origin}`, {
			method: 'PUT',
			body: JSON.stringify({ product })
		});
		const data = await respone.json();
		isPopupOpened = false;
	};

	const editProduct = () => {
		isPopupOpened = true;
	};
</script>

{#if isPopupOpened}
	<EditPopup
		on:popupClosed={() => (isPopupOpened = false)}
		{product}
		on:submitClicked={saveEdits}
	/>
{/if}

<li class="product" bind:this={productEl}>
	<div class="info">
		<h3 class="info_label">name</h3>
		<p class="info_text">{product.name}</p>
	</div>
	<div class="info">
		<h3 class="info_label">category</h3>
		<p class="info_text">{product.category}</p>
	</div>
	<div class="info">
		<h3 class="info_label">price</h3>
		<p class="info_text">{product.price}</p>
	</div>
	<div class="info">
		<h3 class="info_label">seller id</h3>
		<p class="info_text">{product.seller_id}</p>
	</div>
	<div class="product_cta">
		<ProductCta on:deleteBtnClicked={deleteProduct} on:editBtnClicked={editProduct} />
	</div>
</li>

<style lang="scss">
	.product {
		display: flex;
		flex-wrap: wrap;
		background-color: white;
		border-radius: 12px;
		padding: 16px 16px 4px;
		position: relative;
		&_cta {
			position: absolute;
			display: flex;
			gap: 16px;
			align-items: center;
			top: 12px;
			right: 12px;
		}
	}
	.info {
		flex: 1 1 50%;
		margin-bottom: 16px;

		&_label {
			text-transform: uppercase;
			font-size: 16px;
			margin-bottom: 8px;
		}
		&_text {
			font-size: 16px;
			color: #333;
			text-transform: capitalize;
		}
	}
</style>
