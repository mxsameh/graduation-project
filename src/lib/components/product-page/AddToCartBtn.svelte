<script lang="ts">
	import { goto } from '$app/navigation';
	import cartStore from '$lib/stores/cart';
	import UserStore from '$lib/stores/userStore';
	import { getCartItemIndex, toCartItem } from '$lib/utils/cart';

	export let product: any;
	export let quantity: any;

	let clearPopup = false;

	const addProduct = (product: any, quantity: number) => {
		let itemIndex = getCartItemIndex($cartStore, product);
		$cartStore.seller_id = product.seller_id;
		if (itemIndex != -1) {
			let item = $cartStore.products[itemIndex];
			item.quantity += quantity;
		} else {
			let item = toCartItem(product, quantity);
			$cartStore.products = [...$cartStore.products, item];
		}
		goto('/cart');
	};


	const getUser = () => {
		const user = $UserStore;
		return user;
	};

	const handleClick = () => {
		const user = getUser();
		if (!user) {
			goto(`/login?redirectTo=products/${product.id}`);
			return
		}
		if ($cartStore.seller_id != -1 && product.seller_id != $cartStore.seller_id) {
			clearPopup = true;
			return;
		}
		addProduct(product, quantity);
	};
	const clearCart = () => {
		$cartStore.products = [];
		addProduct(product, quantity);
	};
	const closePopup = (e: any) => {
		const target = e.target as HTMLElement;
		if (target.classList.contains('clear-popup')) clearPopup = true;
	};
</script>

{#if clearPopup}
	<!-- svelte-ignore a11y-click-events-have-key-events -->
	<div class="clear-popup" on:click={closePopup}>
		<div class="clear-popup_container">
			<h3 class="clear-popup_heading">There's already an open basket</h3>
			<p class="clear-popup_text">
				are you sure you want to delete the old cart and create a new one?
			</p>
			<div class="clear-popup_btns">
				<button class="clear-btn btn" on:click={clearCart}>Clear cart</button>
				<button
					class="no-btn btn"
					on:click={() => {
						clearPopup = false;
					}}>Cancel</button
				>
			</div>
		</div>
	</div>
{/if}

<button class="add" on:click={handleClick}>
	<svg class="add_icon" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path
			d="M42.5 45C43.8261 45 45.0979 45.5268 46.0355 46.4645C46.9732 47.4021 47.5 48.6739 47.5 50C47.5 51.3261 46.9732 52.5979 46.0355 53.5355C45.0979 54.4732 43.8261 55 42.5 55C41.1739 55 39.9021 54.4732 38.9645 53.5355C38.0268 52.5979 37.5 51.3261 37.5 50C37.5 47.225 39.725 45 42.5 45ZM2.5 5H10.675L13.025 10H50C50.663 10 51.2989 10.2634 51.7678 10.7322C52.2366 11.2011 52.5 11.837 52.5 12.5C52.5 12.925 52.375 13.35 52.2 13.75L43.25 29.925C42.4 31.45 40.75 32.5 38.875 32.5H20.25L18 36.575L17.925 36.875C17.925 37.0408 17.9908 37.1997 18.1081 37.3169C18.2253 37.4342 18.3842 37.5 18.55 37.5H47.5V42.5H17.5C16.1739 42.5 14.9021 41.9732 13.9645 41.0355C13.0268 40.0979 12.5 38.8261 12.5 37.5C12.5 36.625 12.725 35.8 13.1 35.1L16.5 28.975L7.5 10H2.5V5ZM17.5 45C18.8261 45 20.0979 45.5268 21.0355 46.4645C21.9732 47.4021 22.5 48.6739 22.5 50C22.5 51.3261 21.9732 52.5979 21.0355 53.5355C20.0979 54.4732 18.8261 55 17.5 55C16.1739 55 14.9021 54.4732 13.9645 53.5355C13.0268 52.5979 12.5 51.3261 12.5 50C12.5 47.225 14.725 45 17.5 45ZM40 27.5L46.95 15H15.35L21.25 27.5H40Z"
		/>
	</svg>
	<span class="add_text">add to cart</span>
</button>

<style lang="scss">
	.add {
		background-color: var(--color-3);
		display: flex;
		align-items: center;
		justify-content: center;
		padding: 10px;
		gap: 16px;
		border-radius: 4px;
		width: 100%;
		transition: all 0.1s linear;
		cursor: pointer;

		&_icon {
			width: 28px;
			fill: #333;
		}
		&_text {
			text-transform: capitalize;
			font-size: 20px;
			font-weight: 500;
			color: #333;
		}
		&:hover {
			background-color: var(--color-4);
		}
		&:active {
			scale: 0.9;
		}
	}
	.clear-popup {
		position: fixed;
		top: 0;
		left: 0;
		width: 100vw;
		height: 100vh;
		background-color: rgba($color: #000000, $alpha: 0.8);
		display: flex;
		justify-content: center;
		align-items: center;

		&_container {
			background-color: white;
			width: clamp(200px, 80vw, 600px);
			text-align: center;
			padding: 40px 32px;
			border-radius: 12px;
		}
		&_heading {
			font-size: 24px;
		}
		&_text {
			font-size: 16px;
			margin-top: 16px;
		}
		&_btns {
			margin-top: 32px;
			display: flex;
			gap: 24px;
			justify-content: center;
		}
	}
	.btn {
		padding: 10px 24px;
		font-size: 16px;
		width: 124px;
		border-radius: 4px;
	}
	.clear-btn {
		background-color: var(--color-4);
		color: white;
		font-weight: bold;
		cursor: pointer;
	}
	.no-btn {
		background-color: var(--color-1);
		cursor: pointer;
	}
</style>
