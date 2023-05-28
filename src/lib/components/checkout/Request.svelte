<script lang="ts">
	import { cancelRequest, deleteOrder } from '$lib/database/firebase/orders';
	import { createEventDispatcher } from 'svelte';

	export let request: any;
	export let orderId: string;

	const dispatch = createEventDispatcher();

	// HANDLE WHEN REQUEST IS ACCEPTED
	// ORDER WILL BE DELETED FROM THE WAITING FOR DELIVERY ORDERS LIST
	let handleAccept = () => {
		deleteOrder(orderId);
		dispatch('acceptRequest', { request });
	};

	// HANDLE WHEN REQUEST IS DECLINED
	let handleDecline = () => {
		cancelRequest(orderId, request.id);
	};
</script>

<li class="request">
	<p class="delivery_name">{request.deliveryName}</p>
	<p class="delivery_price">{request.price} EGP</p>
	<div class="buttons">
		<button class="accept-btn" on:click={handleAccept}>accept</button>
		<button class="decline-btn" on:click={handleDecline}>decline</button>
	</div>
</li>

<style lang="scss">
	.request {
		display: flex;
		flex-wrap: wrap;
		background-color: var(--color-2);
		padding: 16px 24px;
		border-radius: 8px;
	}
	.delivery {
		&_name {
			font-size: 16px;
			color: #333;
			text-transform: capitalize;
			flex-basis: 50%;
			padding-right: 24px;
		}
		&_price {
			text-align: right;
			font-size: 18px;
			color: #333;
			font-weight: bold;
			text-transform: uppercase;
			flex-basis: 50%;
		}
	}
	.buttons {
		flex-basis: 100%;
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 24px;
		margin-top: 16px;
	}
	.accept-btn {
		padding: 8px 32px;
		font-size: 16px;
		color: #333;
		background-color: var(--color-3);
		text-transform: uppercase;
		cursor: pointer;
		border-radius: 4px;
	}
	.decline-btn {
		padding: 16px auto;
		font-size: 16px;
		color: #333;
		text-transform: uppercase;
		cursor: pointer;
	}
</style>
