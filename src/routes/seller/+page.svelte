<script lang='ts'>
	import Header from "$lib/components/Seller/Header.svelte";
	import ProductsList from "$lib/components/Seller/ProductsList.svelte";

</script>

<Header/>
<main class="main">
  <ProductsList/>
</main>

<style lang='scss'>
  .main{
    margin: 24px;
  }
  
</style>