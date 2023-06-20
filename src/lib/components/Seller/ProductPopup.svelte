<script lang="ts">
	import categoriesStore from '$lib/stores/categories';
	import { createEventDispatcher } from 'svelte';

	interface Product {
		id?: number;
		name: string;
		price: number;
		images: string | string[];
		category: string;
		sellerId?: number;
		reviews_number?: number;
		reviews_stars?: number;
		description: string;
		information: string;
		details: string;
	}

	export let product: Product = {
		name: '',
		category: '',
		price: 0,
		images: '',
		description: '',
		information: '',
		details: '',
		reviews_number: 0,
		reviews_stars: 0
	};
	export let close = () => {};

	const dispatch = createEventDispatcher();
	// const categories = ['junk food', 'food', 'drinks'];
	const categories = $categoriesStore.map((categ) => categ.name);
	console.log(categories);
	let formEl: HTMLFormElement;
	let isFormValid = true;

	const handleCloseClick = () => {
		dispatch('popupClosed');
		close();
	};

	const closePopup = (e: any) => {
		if (e.target.classList.contains('popup')) handleCloseClick();
	};

	const handleSubmit = () => {
		if (formEl.checkValidity()) {
			let images = product.images.toString().replaceAll('\n', '').split(',');
			dispatch('submitClicked', { product: { ...product, images } });
		} else {
			isFormValid = false;
		}
	};
	const imageChange = (e: any) => {
		let target = e.target as HTMLInputElement;
		let lastChar = target.value[target.value.length - 1];
		if (lastChar == ',') {
			target.value = `${target.value}\n`;
		}
	};
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<div class="popup" on:click={closePopup}>
	<div class="popup_container">
		<span class="popup_close-btn" on:click={handleCloseClick}>x</span>
		<form bind:this={formEl}>
			<label for="name">name</label>
			<input type="text" name="name" id="name" bind:value={product.name} required />
			<label for="category">category</label>
			<select name="categories" id="categories" bind:value={product.category} required>
				{#each categories as category}
					<option value={category}>{category}</option>
				{/each}
			</select>
			<label for="images">images</label>
			<textarea rows="2" id="images" required bind:value={product.images} on:input={imageChange} />
			<p class="note">For multiple images seperate links using ","</p>
			<label for="price">price</label>
			<input type="number" name="price" id="price" bind:value={product.price} required />
			<label for="details">details</label>
			<textarea name="details" id="details" rows="5" required bind:value={product.details} />
			<label for="description">description</label>
			<textarea
				name="description"
				id="descritpion"
				rows="10"
				required
				bind:value={product.description}
			/>
			<label for="information">information</label>
			<textarea
				name="information"
				id="information"
				rows="10"
				required
				bind:value={product.information}
			/>
			<button class="submit-btn" on:click|preventDefault={handleSubmit}>save</button>
			{#if !isFormValid}
				<p class="validation-error">Please fill all fields</p>
			{/if}
		</form>
	</div>
</div>

<style lang="scss">
	.popup {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100vh;
		background-color: rgba($color: #000000, $alpha: 0.9);
		display: flex;
		align-items: center;
		justify-content: center;
		z-index: 20;

		&_container {
			width: clamp(200px, 100%, 800px);
			height: 80%;
			overflow: auto;
			background-color: white;
			padding: 24px;
			border-radius: 12px;
			display: flex;
			flex-direction: column;
			align-items: center;
			position: relative;
		}
		&_close-btn {
			font-size: 32px;
			font-weight: bold;
			font-family: Arial, Helvetica, sans-serif;
			color: red;
			position: absolute;
			top: 8px;
			right: 24px;
			line-height: 1;
			cursor: pointer;
		}
	}

	form {
		width: clamp(200px, 100%, 400px);
	}

	label {
		margin-bottom: 12px;
		margin-top: 24px;
		text-transform: capitalize;
		font-weight: bold;
		font-size: 20px;
	}
	input,
	select,
	textarea {
		padding: 8px 12px;
		border: 1px #555 solid;
		border-radius: 4px;
		width: 100%;
		font-size: 16px;
		text-transform: capitalize;
	}
	option {
		text-transform: capitalize;
	}
	textarea {
		text-transform: none;
	}
	.submit-btn {
		margin: 40px auto 24px;
		display: block;
		text-transform: capitalize;
		font-size: 16px;
		background-color: var(--color-3);
		width: 100%;
		padding: 12px;
		border-radius: 8px;
		cursor: pointer;
		font-weight: bold;
		color: white;
		&:hover {
			background-color: var(--color-4);
		}
	}
	.validation-error {
		color: red;
		font-size: 16px;
		text-align: center;
	}
	.note {
		margin-top: 12px;
		font-size: 14px;
		color: #555;
	}
</style>
