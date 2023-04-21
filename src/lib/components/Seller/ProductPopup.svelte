<script lang="ts">
	import { createEventDispatcher } from 'svelte';

	export let product: any = {name: '', category: '', price: 0};
	export let close = () => {};


	const dispatch = createEventDispatcher();
	const categories = ['junk food', 'food', 'drinks'];
	let formEl : HTMLFormElement;
	let isFormValid = true

	const handleCloseClick = () => {
		dispatch('popupClosed');
		close()
	};

	const closePopup = (e: any) => {
		if (e.target.classList.contains('popup')) handleCloseClick();
	};

	const handleSubmit = () => {
		if(formEl.checkValidity())
		{
			dispatch('submitClicked', { product });
		}
		else{
			isFormValid = false
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
			<select name="categories" id="categories" bind:value={product.category} >
				{#each categories as category}
					<option value={category}>{category}</option>
				{/each}
			</select>
			<label for="price">price</label>
			<input type="number" name="price" id="price" bind:value={product.price} />
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
			width: clamp(200px, 100%, 600px);
			min-height: 400px;
			background-color: white;
			padding: 24px;
			border-radius: 12px;
			display: flex;
			flex-direction: column;
			align-items: center;
            position: relative;
		}
        &_close-btn{
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
	select {
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
	}
	.validation-error{
		color: red;
		font-size: 16px;
	}
</style>
