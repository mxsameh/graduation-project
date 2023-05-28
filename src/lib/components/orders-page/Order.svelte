<script lang="ts">
	import OrderBody from './OrderBody.svelte';
	import OrderHeader from './OrderHeader.svelte';
	export let order: any;

</script>

<div class="order">
	<OrderHeader
		orderDate={order.date}
		orderTime={order.time}
		orderTotal={order.total}
		orderShipping={order.shipping}
		orderTaxes={order.taxes}
	/>
	<OrderBody products={order.products} />
</div>

<style>
	.order {
		width: 100%;
		border: 2px solid var(--color-3);
		border-radius: 12px;
		overflow: hidden;
	}
</style>
