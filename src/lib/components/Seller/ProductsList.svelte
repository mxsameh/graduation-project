<script lang="ts">
	// import products from "$lib/stores/products";
	import Product from "./Product.svelte";
  export let products : any

</script>

<ul class="products_list">
  {#each products as product}
  <Product {product}/>
  {/each}
</ul>

<style lang="scss">
  .products_list{
    display: flex;
    flex-direction: column;
    gap: 16px;
    max-width: 1300px;
    margin: 0 auto;
  }
</style>
