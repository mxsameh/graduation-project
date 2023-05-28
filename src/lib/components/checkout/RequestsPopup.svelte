<script lang="ts">
	import Request from './Request.svelte';
	import { database } from '$lib/database/firebase/firebase';
	import { onValue, ref } from 'firebase/database';
	import { deleteOrder } from '$lib/database/firebase/orders';
	import { page } from '$app/stores';
	import { clearCart } from '$lib/stores/cart';
	import { goto } from '$app/navigation';

	export let closeOffers: () => void;
	export let order: any;
	let orderId = order.id;
	$: requests = [];

	// FETCH REQUESTS AND ALSO LISTEN TO CHANGES WHENEVER IT HAPPENS
	const requestsRef = ref(database, `orders/${orderId}`);
	onValue(requestsRef, (snapshoot) => {
		let data = snapshoot.val();
		if (!data?.requests) {
			requests = [];
		} else {
			requests = Object.values(data.requests);
		}
	});

	// HANDLE CLOSE REQUEST POPUPS
	const handleClose = () => {
		deleteOrder(orderId);
		closeOffers();
	};

	// HANDLE SUBMIT ORDER BUTTON CLICK
	const submitOrder = (e: any) => {
		const request = e.detail.request;
		const billingInfo = order.address;
		billingInfo.address = billingInfo.location;
		delete billingInfo.location;
		delete order.address;
		delete order.requests;
		const submittedOrder = {
			...order,
			status: 'delivering',
			...billingInfo,
			delivery_id: request.deliveryId,
			total: order.total + request.price,
			shipping: request.price
		};
		addOrder(submittedOrder).then(() => {
			goto('/orders');
		});
	};

	const url = $page.url.origin + '/api/orders';
	// ADD ORDER TO DATABASE
	const addOrder = async (order: any) => {
		clearCart();
		const req = await fetch(url, {
			method: 'POST',
			body: JSON.stringify({ order }),
			headers: {
				'Content-Type': 'application/json'
			}
		});
	};
</script>

<div class="wraper">
	<div class="offers_container">
		<button class="closeIcon" on:click={handleClose}>x</button>
		{#key requests}
			{#if requests?.length}
				<h3 class="offers_title">choose your delivery</h3>
				<ul class="offers_list">
					{#each requests as request}
						<Request on:acceptRequest={submitOrder} {request} {orderId} />
					{/each}
				</ul>
			{:else}
				<h3 class="offers_title">Please wait for Delivery Requests</h3>
			{/if}
		{/key}
	</div>
</div>

<style lang="scss">
	.wraper {
		width: 100vw;
		height: 100vh;
		background-color: rgba(0, 0, 0, 0.8);
		position: fixed;
		top: 0;
		left: 0;
		display: flex;
		align-items: center;
		justify-content: center;
	}
	.offers {
		&_container {
			background-color: white;
			position: relative;
			width: clamp(200px, 70%, 800px);
			min-height: 50vh;
			max-height: 80vh;
			overflow-y: auto;
			border-radius: 8px;
			padding: 32px 24px;
		}
		&_title {
			font-size: 28px;
			font-weight: 500;
			color: black;
			text-align: center;
			text-transform: capitalize;
			font-weight: bold;
		}
		&_list {
			margin-top: 24px;
			display: flex;
			flex-direction: column;
			gap: 24px;
		}
	}
	.closeIcon {
		position: absolute;
		top: 8px;
		right: 8px;
		line-height: 1;
		font-size: 32px;
		font-weight: 500;
		font-family: system-ui, -apple-system, sans-serif;
		padding: 12px;
		cursor: pointer;
	}
</style>
