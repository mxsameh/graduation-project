<script>

	import Categories from "$lib/components/home-page/Categories.svelte";
	import Deals from "$lib/components/home-page/Deals.svelte";
	import FeaturedProducts from "$lib/components/home-page/FeaturedProducts.svelte";

</script>

<main class="main">

  <Categories/>
  <FeaturedProducts/>
  <Deals/>
</main>

<style lang="scss">
  .main{
    padding: 24px;
    max-width: 1400px;
    margin: 0 auto;
  }
  
</style>