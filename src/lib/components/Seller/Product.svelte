<script lang="ts">
	import products from "$lib/stores/products";
	import ProductCta from "./ProductCta.svelte";

  export let product : any;

	const deleteProduct = () =>
	{
		const newProducts = $products.filter(prod => prod.id != product.id)
		products.set(newProducts)
	}


</script>

<li class="product">
	<div class="product_image">
		<img class="image" src="/groc.jpg" alt="" />
	</div>
	<div class="product_info">
		<h2 class="product_name">{product.name}</h2>
		<p class="product_details">{product.details}</p>
		<p class="product_price">{product.price} L.E</p>
	</div>
	<div class="product_cta">
    <ProductCta on:deleteBtnClicked={deleteProduct} />
	</div>
</li>

<style lang="scss">
	.product {
		background-color: white;
		border-radius: 24px;
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
			padding: 8px;
		}
		&_name {
			text-transform: capitalize;
			color: black;
			font-size: 28px;
		}
		&_details {
			margin-top: 16px;
			color: #555;
		}
		&_price {
			margin-top: 20px;
			font-size: 24px;
			color: #333;
			font-weight: bold;
		}
    &_cta{
      display: flex;
      gap: 24px;
      align-items: center;
      margin-left: auto;
      margin-right: 32px;

    }
	}
</style>
