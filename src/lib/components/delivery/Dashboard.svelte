<script lang="ts">
	import SideBar from './SideBar.svelte';
	import RequestsList from './RequestsList.svelte';
	import Orders from './Orders.svelte';

	export let tabs: any;
	export let delivery: any;

	let activeTab = 'orders';

	const changeTab = (e: any) => {
		activeTab = e.detail.activeTab.name;
	};
</script>

<div class="dashboard">
	<nav class="navbar">
		<SideBar on:tabClicked={changeTab} {tabs} />
	</nav>
	<main class="main">
		{#if activeTab == 'requests'}
			<RequestsList {delivery} />
		{:else if activeTab == 'orders'}
			<Orders {delivery} />
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
		// padding: 24px 16px;
	}
</style>
