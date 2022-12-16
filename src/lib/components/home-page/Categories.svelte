<script lang="ts">
	import categories from "$lib/stores/categories";
	import CategoryCard from "$lib/components/home-page/CategoryCard.svelte";
	import Title from "./Title.svelte";

</script>


<section class="categories">
  <Title title={`Categories`} />
  <div class="categories_gallery">
    {#each $categories as category }
    <CategoryCard {category} />
    {/each}
  </div>
</section>

<style lang="scss">
  .categories{

    &_gallery{
      display: flex;
      flex-wrap: wrap;
      gap: 24px;
      margin-top: 24px;
    }
  }
  
</style>