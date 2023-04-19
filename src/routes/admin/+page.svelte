<script lang="ts">
    import Header from '$lib/components/admin/Header.svelte';
    import SideBar from '$lib/components/admin/SideBar.svelte';
    import Dashboard from '$lib/components/admin/Dashboard.svelte';
	import { onMount } from 'svelte';

    export let data
    const admin = data.admin
    let activeTab = "users";
	let items : any;

    const changeTab = (e : any) =>
    {
        activeTab = e.detail.activeTab
        getData().then(data => items = data)
    }

	const getData = async () => {
		const response = await fetch(`${origin}/api/${activeTab}`);
		const data = await response.json();
        return data
	};

	onMount(() => {
        getData().then(data => items = data)
	});


</script>

<Header name={admin.name} />
<div class="container">
    <nav class="navbar">
        <SideBar on:tabClicked={changeTab} />
    </nav>
    <main class="main">
        <Dashboard {activeTab} {items} />
    </main>
</div>


<style lang="scss">
    .container{
        width: 100%;
        height: calc(100vh - 60px);
        display: flex;
        overflow: hidden;
    }
    .navbar{
        width: clamp(200px, 30%, 300px);
        flex-shrink: 0;
        height: 100%;
    }
    .main{
        flex: 1 1 100%;
        height: 100%;
        overflow-y: auto;

    }

</style>