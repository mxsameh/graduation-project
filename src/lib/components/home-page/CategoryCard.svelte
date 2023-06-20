<script lang="ts">
	export let category: any;
	const link = category.name.replaceAll(' ', '-');
	const url = `/category/${link}`;
</script>

<a class="category" href={url}>
	<div class="imageContainer">
		<img class="category_img" src={category.image} alt="" />
	</div>
	<div class="category_info">
		<h3 class="category_name">{category.name}</h3>
		<p class="category_products-count">{category.productsNumber} products</p>
	</div>
</a>

<style lang="scss">
	.imageContainer {
		flex-basis: 40%;
		overflow: hidden;
	}
	.category {
		border-radius: 16px;
		box-shadow: 8px 0px 12px 8px rgba(0, 0, 0, 0.1);
		flex-basis: calc((100% - 24px * 3) / 4);
		min-width: 300px;
		display: flex;
		gap: 16px;
		height: 100px;
		background-color: white;
		align-items: center;
		padding: 8px;
		border-radius: 4px;
		overflow: hidden;

		&_img {
			width: 100%;
			object-fit: cover;
		}
		&_info {
			flex-basis: 60%;
		}
		&_name {
			font-size: 16px;
			text-transform: capitalize;
		}
		&_products-count {
			font-size: 14px;
			color: #333;
			margin-top: 12px;
		}
	}
</style>
