<script lang="ts">
	import Categories from "$lib/components/home-page/Categories.svelte";
	import Deals from "$lib/components/home-page/Deals.svelte";
	import FeaturedProducts from "$lib/components/home-page/FeaturedProducts.svelte";

  export let data : any;
  const products = data.products

</script>

<main class="main">

  <Categories/>
  <!-- <FeaturedProducts products={$productsStore}/> -->
  <FeaturedProducts {products}/>
  <Deals/>
</main>

<style lang="scss">
  .main{
    padding: 24px;
    max-width: 1400px;
    margin: 0 auto;
  }
  
</style>