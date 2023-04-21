<script lang="ts">
	import User from './User.svelte';
	import Product from './Product.svelte';
	import SideBar from './SideBar.svelte';
	import { onMount } from 'svelte';
	import Order from '../orders-page/Order.svelte';

	export let tabs: any;
	export let token: string;

	let activeTab = tabs[0];
	let items: any;

	const getData = async () => {
		const response = await fetch(activeTab.itemsUrl, {
			headers: {
				Authorization: `Bearer ${token}`
			}
		});
		const data = await response.json();
		return data;
	};

	const changeTab = (e: any) => {
		items = null;
		activeTab = e.detail.activeTab;
		getData().then((data) => {
			items = data;
		});
	};

	onMount(() => {
		getData().then((data) => (items = data));
	});
</script>

<div class="dashboard">
	<nav class="navbar">
		<SideBar on:tabClicked={changeTab} {tabs} />
	</nav>
		<main class="main">
			{#if items?.length}
				<ul class="list">
					{#each items as item}
						{#if activeTab.name == 'users'}
							<User user={item} />
						{:else if activeTab.name === 'products'}
							<Product product={item} />
						{:else if activeTab.name === 'orders'}
							<Order order={item} />
						{/if}
					{/each}
				</ul>
			{/if}
		</main>
</div>

<style lang="scss">
	.dashboard {
		width: 100%;
		height: 100%;
		display: flex;
		overflow: hidden;
	}
	.navbar {
		width: clamp(200px, 30%, 300px);
		flex-shrink: 0;
		height: 100%;
	}
	.main {
		flex: 1 1 100%;
		height: 100%;
		overflow-y: auto;
	}
	.list {
		display: flex;
		width: 100%;
		flex-direction: column;
		padding: 24px;
		gap: 24px;
	}
</style>
