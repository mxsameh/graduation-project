<script lang="ts">
	import Order from '$lib/components/orders-page/Order.svelte';

	interface Iorder {
		id : number
		date : string
		time: string
		products: []
		shipping: number
		total: number
	}

	// const orders = [
	// 	{
	// 		id: 1,
	// 		date: '12/5/6',
	// 		time: '12:20',
	// 		products: [
	// 			{ id: 2, image: '/groc.jpg', name: 'product 2', price: '88', quantity: 5 },
	// 			{ id: 1, image: '/groc.jpg', name: 'product 1', price: '109', quantity: 4 },
	// 			{ id: 3, image: '/groc.jpg', name: 'product 3', price: '50', quantity: 4 }
	// 		],
    //         shipping: 60,
    //         total: 2300
	// 	},
	// 	{
	// 		id: 2,
	// 		date: '11/3/6',
	// 		time: '3:45',
	// 		products: [
	// 			{ id: 3, image: '/groc.jpg', name: 'product 3', price: '50', quantity: 4 },
	// 			{ id: 4, image: '/groc.jpg', name: 'product 4', price: '400', quantity: 4 },
	// 			{ id: 5, image: '/groc.jpg', name: 'product 5', price: '200', quantity: 4 }
	// 		],
    //         shipping: 30,
    //         total: 450
	// 	}
	// ];
	export let data;
	const orders = data.orders
</script>

<ul class="orders-list">
	{#each orders as order}
		<Order {order} />
	{/each}
</ul>

<style lang="scss">
	.orders-list {
		min-height: 70vh;
		padding: 24px;
        display: flex;
        flex-direction: column;
        gap: 24px;
	}
</style>
