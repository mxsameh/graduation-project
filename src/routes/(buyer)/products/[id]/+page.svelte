<script lang="ts">
	import ProductDetails from '$lib/components/product-page/ProductDetails.svelte';
	import ProductImages from '$lib/components/product-page/ProductImages.svelte';

	export let data  : any;
	let product = data.product

	let activeTab = 'details'
</script>


<main class="main">
	<section class="product">
		<!-- product_image -->
		<ProductImages images={product.images} />
		<!-- product info -->
		<ProductDetails {product} />
	</section>

	<section class="info">
		<nav class="info_nav">
			<!-- svelte-ignore a11y-click-events-have-key-events -->
			<ul class="tabs">
				<li class="tab" on:click={()=>{activeTab='details'}} class:is-active={activeTab == 'details'}>details</li>
				<li class="tab" on:click={()=>{activeTab='information'}} class:is-active={activeTab == 'information'}>information</li>
			</ul>
		</nav>

		<div class="info_content">
			{#if activeTab == 'details' }
			<h1 class="info_title">product details</h1>
			<div class="info_text">{product.details}</div>
			{:else if activeTab == 'information'}
			<h1 class="info_title">product information</h1>
			<div class="info_text">{product.information}</div>
			{/if}
		</div>
	</section>
</main>

<style lang="scss">
	.main {
		padding: 24px;
		max-width: 1600px;
		margin: 0 auto;
	}
	.product {
		display: flex;
		width: 100%;
		gap: 40px;
		align-items: stretch;
	}
	.info {
		width: 100%;
		margin-top: 40px;
		background-color: white;

		&_nav {
			border-bottom: 2px solid var(--color-2);
		}
		&_content{
			background-color: white;
			padding: 24px;
		}
		&_title{
			font-size: 28px;
			color: #333;
			text-transform: capitalize;
		}
		&_text{
			margin-top: 16px;
			font-size: 18px;
			line-height: 28px;
			color: #555;
		}
	}
	.tabs {
		display: flex;
		gap:16px;
	}
	.tab {
		padding: 16px 24px;
		padding-right: 32px;
		color: #333;
		text-transform: capitalize;
		font-size: 18px;
		border-radius: 8px 8px 0 0;
		cursor: pointer;
	}
	.is-active{
		color: black;
		background-color: var(--color-3);
	}


</style>
