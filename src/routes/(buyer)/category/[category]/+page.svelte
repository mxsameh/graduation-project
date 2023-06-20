<script lang="ts">
	import ProductCard from '$lib/components/home-page/ProductCard.svelte';

	export let data: any;
	let products = data.products;
	let category = data.category;
</script>

<h1 class="title">{category} category</h1>
<main class="main">
	{#if products?.length}
		{#each products as product}
			<div class="product">
				<ProductCard {product} />
			</div>
		{/each}
	{:else}
		<h2 class="empty">no product found in this category</h2>
		<a href="/" class="homeBtn">home</a>
	{/if}
</main>

<style lang="scss">
	.homeBtn {
		padding: 16px 40px;
		width: clamp(160px, 80%, 400px);
		text-transform: uppercase;
		font-weight: bold;
		letter-spacing: 1px;
		margin: 0 auto;
		text-align: center;
		background-color: var(--color-3);
		align-self: flex-start;
		border-radius: 12px;
	}
	.empty {
		font-size: 24px;
		font-family: Arial, Helvetica, sans-serif;
		text-align: center;
		text-transform: uppercase;
		margin-top: 40px;
		color: rgb(48, 48, 56);
		width: 100%;
		align-self: flex-start;
	}
	.title {
		font-size: 40px;
		font-family: Arial, Helvetica, sans-serif;
		text-align: center;
		text-transform: uppercase;
		margin-top: 32px;
	}
	.main {
		min-height: 50vh;
		width: 100%;
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		gap: 40px;
		padding: 40px 24px;
	}
	.product {
		flex-basis: 30%;
		max-width: 300px;
	}
</style>
