<script lang="ts">
	import { page } from '$app/stores';
	import EditPopup from './ProductPopup.svelte';
	import ProductCta from './ProductCta.svelte';

	export let product: any;

	let isPopupOpened = false;

	let productEl: HTMLLIElement;

	const deleteProduct = async () => {
		const productId = product.id;
		const origin = $page.url.origin;

		const response = await fetch(`${origin}/api/products/?id=${productId}`, {
			method: 'DELETE'
		});
		const respnoseData = await response.json();
		const isDeleted = respnoseData.success;
		if (isDeleted) productEl.remove();
	};

	const editProduct = () => {
		isPopupOpened = true
	};
	const saveEdits = async (e : any) =>
	{
		product = product
		// edit product
		const origin = $page.url.origin
		const respone = await fetch(`${origin}/api/products`,{
			method: "PUT",
			body: JSON.stringify({product})
		})
		const data = await respone.json()

		isPopupOpened = false
	}
</script>

{#if isPopupOpened}
	<EditPopup on:popupClosed={()=>isPopupOpened = false} {product} on:submitClicked={saveEdits} />
{/if}

<li class="product" bind:this={productEl}>
	<div class="product_image">
		<img class="image" src="/groc.jpg" alt="" />
	</div>
	<div class="product_info">
		<h2 class="product_name">{product.name}</h2>
		<p class="product_category">
			<span class="product_details">Category:</span>
			{product.category}
		</p>
		<p class="product_price"><span class="product_details">Price:</span> {product.price} L.E</p>
	</div>
	<div class="product_cta">
		<ProductCta on:deleteBtnClicked={deleteProduct} on:editBtnClicked={editProduct} />
	</div>
</li>

<style lang="scss">
	.product {
		background-color: white;
		border-radius: 16px;
		overflow: hidden;
		display: flex;
		gap: 24px;

		&_image {
			width: 200px;
			.image {
				width: 100%;
			}
		}
		&_info {
			max-width: 600px;
			padding: 16px 8px;
			color: black;
		}
		&_details {
			color: #555;
			font-size: 20px;
		}
		&_name {
			text-transform: capitalize;
			font-size: 24px;
		}
		&_category {
			margin-top: 16px;
			text-transform: capitalize;
		}
		&_price {
			margin-top: 12px;
			font-size: 20px;
			color: #333;
		}
		&_cta {
			display: flex;
			gap: 24px;
			align-items: center;
			margin-left: auto;
			margin-right: 32px;
		}
	}
</style>
