<script lang="ts">
	import Title from '../home-page/Title.svelte';
	import Input from './Input.svelte';

	export let valid : Boolean;

	let inputs = [
		{
			label: 'country',
			placeholder: 'Egypt',
			id: 'country',
			type: 'text'
		},
		{
			label: 'city',
			placeholder: 'Cairo',
			id: 'city',
			type: 'text'
		},
		{
			label: 'address',
			placeholder: '123 street',
			id: 'address',
			type: 'text'
		},
		{
			label: 'zip code',
			placeholder: '11871',
			id: 'zipCode',
			type: 'number'
		}
	];
</script>

<section class="billing">
	<Title title={'billing address'} />
	<!-- BILLING ADDRESS FORM -->
	<form class="billing_form" id="billingForm">
		{#each inputs as input}
			<Input {input} />
		{/each}
	</form>
	{#if !valid}
	<p class="error-text">Please fill the form above!!</p>
	{/if}
</section>

<style lang="scss">
	.billing {
		flex-basis: 65%;
		margin: 0 16px;
		&_form {
			margin-top: 24px;
			background-color: white;
			padding: 40px 30px;
			display: flex;
			flex-wrap: wrap;
		}
	}
	.error-text{
		text-align: center;
		margin-top: 24px;
		padding: 0 12px;
		font-size: 16px;
		font-weight: bold;
		color: rgb(211, 28, 28);
	}
</style>
