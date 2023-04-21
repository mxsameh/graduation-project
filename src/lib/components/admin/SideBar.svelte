<script lang="ts">
	import { createEventDispatcher } from "svelte";

    export let tabs : any;

    const dispatch = createEventDispatcher()

    let activeTab = tabs[0] 
	let tabNames = tabs.map((tab: any) => tab.name);
    let activeTabName = tabNames[0]

    const handleTabClick = (e : any) =>
    {
        const id = e.target.dataset.id
        activeTab = tabs[id]
        activeTabName = activeTab.name
        dispatch('tabClicked',{activeTab})
    }

</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<ul class="tabs">
    {#each tabNames as tabName,index}
    <li data-id={index} class="tabs_item" class:tabs_item-active={activeTabName == tabName} on:click={handleTabClick}>{tabName}</li>
    {/each}
</ul>


<style lang="scss">
    .tabs{
        width: 100%;
        height: 100%;
        padding: 40px 24px;
        border-right: 2px solid var(--color-2);

        &_item{
            background-color: var(--color-2);
            padding: 16px;
            border-radius: 8px;
            margin-bottom: 24px;
            text-transform: capitalize;
            font-weight: 500;
            font-size: 18px;
            letter-spacing: .5px;
            cursor: pointer;
            &-active{
                background-color: var(--color-4);
                color: white;
            }
        }
    }

</style>