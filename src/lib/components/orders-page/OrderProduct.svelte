<script lang="ts">
	export let product: any;
</script>

<tr class="table_row product">
	<td class="table_data product_details">
		<img class="product_image" src={product.images[0]} alt="" />
		<span class="product_name">{product.name}</span>
	</td>
	<td class="table_data product_price">{ product.price } L.E</td>
	<td class="table_data product_quantity">{product.quantity}</td>
	<td class="table_data product_total">{product.quantity * product.price} L.E</td>
</tr>

<style lang="scss">
	.product {
        border-bottom: 12px solid var(--color-1);
		&_details {
			display: flex;
			align-items: center;
			gap: 24px;
		}
		&_image {
			width: 80px;
			aspect-ratio: 1;
			object-fit: cover;
			border-radius: 16px;
		}
		&_name {
			font-size: 16px;
			text-transform: capitalize;
		}
		&_price {
			width: 130px;
		}
	}
</style>
