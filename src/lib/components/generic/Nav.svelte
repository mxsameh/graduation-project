<script lang="ts">
	import CategoriesMenu from "$lib/components/generic/CategoriesMenu.svelte";

  let links = ['category 1', 'category 2', 'category 3', 'category 4']
  
</script>

<nav class="nav">
  <div class="categories">
    <CategoriesMenu/>
  </div>
  <ul class="pages_list">
    {#each links as link }
      <li>
        <a class="page_link" href={`/${link}`}>{link}</a>
      </li>
    
    {/each}
  </ul>

</nav>

<style lang="scss">
  .nav{
    width: 100%;
    background-color: var(--color-2);
    display: flex;
    align-items: center;
    gap: 40px;
    padding: 0 24px;
  }
  .pages_list{
    display: flex;
    gap: 16px;
  }
  .page_link{
    text-transform: capitalize;
    font-size: 16px;
  }
  
</style>