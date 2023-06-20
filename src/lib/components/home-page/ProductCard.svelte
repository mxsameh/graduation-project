<script lang="ts">
	import Review from './Review.svelte';

	export let product: any;
</script>

<div class="product">
	<a href={`/products/${product.id}`}>
		<img class="product_image" src={product.images[0]} alt="" />
		<div class="product_info">
			<h3 class="product_name">{product.name}</h3>
			<p class="product_price">$ {product.price}</p>
			<!-- <Review stars={product.reviewsStars} reviews={product.reviewsNumber} /> -->
		</div>
	</a>
</div>

<style lang="scss">
	.product {
		width: clamp(200px, 100%, 500px);
		overflow: hidden;
		background-color: white;
		border-radius: 24px;
		padding: 12px;
		box-shadow: 1px 4px 16px 4px rgb(0, 0, 0, 0.1);

		&_image {
			width: 100%;
		}
		&_info {
			padding: 24px;
			display: flex;
			flex-direction: column;
			gap: 12px;
			align-items: center;
		}
		&_name {
			font-size: 20px;
			text-transform: capitalize;
		}
		&_price {
			font-size: 20px;
			color: #333;
			font-weight: 500;
		}
	}
</style>
