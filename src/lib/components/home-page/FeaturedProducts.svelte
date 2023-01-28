<script>
	import products from "$lib/stores/products";
	import ProductCard from "./ProductCard.svelte";
	import Title from "./Title.svelte";

</script>

<div class="features">
  <Title title={`featured products`} />
  <div class="features-gallery">
    {#each $products as product }
      <ProductCard {product} />
    {/each}
  </div>
</div>

<style lang="scss">
  .features{
    margin-top: 56px;
  }

  .features-gallery{
    margin-top: 24px;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 24px;
  }
</style>