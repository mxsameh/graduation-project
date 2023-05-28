<script lang="ts">
	import { cancelRequest, sendRequest } from '$lib/database/firebase/orders';

	export let order: any;
	export let delivery: any;

	// let orderRequests = order.requests;
	// console.log(orderRequests);
	// if (orderRequests) {
	// 	orderRequests = Object.values(orderRequests);
	// 	let requested = orderRequests.filter((req: any) => req.deliveryId == delivery.id);
	// 	console.log(requested);
	// }

	const checkIfRequestedBefore = () => {
		let orderRequests = order.requests;
		if (!orderRequests) return;

		orderRequests = Object.values(orderRequests);
		let deliveryRequest = orderRequests.filter((req: any) => req.deliveryId == delivery.id);

		if (!deliveryRequest) return;

		return deliveryRequest[0];
	};

	let deliveryRequest = checkIfRequestedBefore();
	let requestStatus = deliveryRequest?.status || '';

	// check first if the delivery has requested before

	let price = 20;
	const increament = () => {
		price++;
	};
	const decreament = () => {
		price--;
	};
	const handleAccept = () => {
		if (deliveryRequest) return;
		let orderId = order.id;
		let deliveryId = delivery.id as number;
		let deliveryName = delivery.name as string;
		let status = 'pending';
		const request = { deliveryId, deliveryName, price, status };
		sendRequest(orderId, request);
	};
	const handleCancel = () => {
		cancelRequest(order.id, deliveryRequest.id);
	};
</script>

<div class="offer">
	<div class="offer_location">
		<p><span class="location_title">From: </span>{order.seller_id}</p>
		<p><span class="location_title">To: </span>{order.address.location}</p>
	</div>

	<div class="offer_counter">
		<!-- svelte-ignore a11y-click-events-have-key-events -->
		<button class="offer_btn dec_btn" on:click={decreament}>-</button>
		<div class="offer_price">{price}</div>
		<button class="offer_btn inc_btn" on:click={increament}>+</button>
	</div>

	<div class="offer_btns">
		{#if requestStatus == 'pending'}
			<button class="request-offer-btn" on:click={handleCancel}>cancel request</button>
		{:else}
			<button class="request-offer-btn" on:click={handleAccept}>send request</button>
		{/if}
	</div>
</div>

<style lang="scss">
	.offer {
		width: 100%;
		max-width: 800px;
		background-color: white;
		padding: 20px 32px;
		border-radius: 16px;
		&_location {
			font-size: 20px;
			display: flex;
			flex-direction: column;
			width: fit-content;
			margin: 0 auto;
			gap: 16px;
		}
		&_counter {
			display: flex;
			justify-content: center;
			align-items: center;
			margin-top: 40px;
		}
		&_price {
			font-size: 24px;
			text-align: center;
			margin: 0 24px;
		}
		&_btn {
			padding: 8px 16px;
			border-radius: 10px;
			font-size: 24px;
			background-color: var(--color-2);
			cursor: pointer;
		}
		&_btns {
			display: flex;
			gap: 20px;
			justify-content: center;
			margin-top: 32px;
		}
	}
	.request-offer-btn {
		padding: 12px 0;
		width: clamp(100px, 40%, 220px);
		background-color: var(--color-4);
		font-size: 14px;
		font-weight: bold;
		text-transform: uppercase;
		border-radius: 4px;
		color: white;
		cursor: pointer;
	}
	.location_title {
		font-size: 18px;
		font-weight: 600;
	}
</style>
