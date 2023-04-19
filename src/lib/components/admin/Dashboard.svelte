<script lang="ts">
	import { page } from '$app/stores';
	import User from './User.svelte';
	import Product from './Product.svelte';

	export let activeTab = 'users';
    export let items : any;

	const origin = $page.url.origin;

</script>

{#if items}
	<ul class="list">
		{#each items as item}
        {#if activeTab == "users"}
			<User user={item} />
        {:else if activeTab == "products"}
			<Product product={item} />
        {/if}
		{/each}
	</ul>
{/if}

<style lang="scss">
	.list {
		display: flex;
		width: 100%;
		flex-direction: column;
		padding: 24px;
	}
</style>
