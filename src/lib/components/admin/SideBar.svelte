<script lang="ts">
	import { createEventDispatcher } from "svelte";


    const dispatch = createEventDispatcher()
    let activeTab = "users"

    const handleTabClick = (e : any) =>
    {
        activeTab = e.target.innerText.toLowerCase();
        dispatch('tabClicked',{activeTab})
    }

</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<ul class="tabs">
    <li data-id=1 class="tabs_item" class:tabs_item-active={activeTab == "users"} on:click={handleTabClick}>users</li>
    <li data-id=2 class="tabs_item" class:tabs_item-active={activeTab == "products"} on:click={handleTabClick}>products</li>
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