<script lang="ts">
	import Header from '$lib/components/admin/Header.svelte';
	import Dashboard from '$lib/components/admin/Dashboard.svelte';
	import { page } from '$app/stores';

	export let data;
	const admin = data.admin;

    const origin = $page.url.origin+'/api'

    let tabs = [
        {name: 'users', itemsUrl : `${origin}/users`},
        {name: 'products', itemsUrl : `${origin}/products`}
    ]

</script>

<Header name={admin.name} />
<div class="container">
	<Dashboard {tabs} />
</div>

<style lang="scss">
	.container {
		width: 100%;
		height: calc(100vh - 60px);
	}
</style>
