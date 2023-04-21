<script lang="ts">
	import OrderProduct from './OrderProduct.svelte';
	export let products: any;
</script>

<div class="order_body">
	<table class="table">
		<thead class="table_head">
			<th class="table_head_item">product</th>
			<th class="table_head_item">price</th>
			<th class="table_head_item">quantity</th>
			<th class="table_head_item">total</th>
		</thead>
		<tbody>
			{#each products as product}
				<OrderProduct {product} />
			{/each}
		</tbody>
	</table>
</div>

<style lang="scss">
	.order_body {
		padding: 12px 24px;
	}
	.table {
		width: 100%;
		border-collapse: collapse;
		margin-top: 12px;
		&_head {
			background-color: white;
			color: #333;
			border-bottom: 16px solid var(--color-1);
		}
		&_head_item {
			font-size: 16px;
			text-transform: capitalize;
			padding: 12px 0;
			text-align: start;
			&:first-of-type {
				padding-left: 12px;
			}
		}
	}
</style>
