<script lang="ts">
	import CartSummary from "$lib/components/cart/CartSummary.svelte";
  import ProductsTable from "$lib/components/cart/ProductsTable.svelte";
	import Title from "$lib/components/home-page/Title.svelte";
	import cartStore from "$lib/stores/cart";
</script>

<main class="main">
  {#if $cartStore}
  <div class="cart_products">
    <Title title={'cart products'}/>
      <ProductsTable products={$cartStore.products} />
  </div>
  <div class="cart_summary">
    <Title title={'cart summary'}/>
    <CartSummary />
  </div>
  {/if}
</main>

<style lang="scss">
  .main{
    display: flex;
    margin: 40px 24px;
    gap: 24px;
  }
  .cart_products{
    flex-basis: 65%;
  }
  .cart_summary{
    flex-basis: 35%;
  }
  
</style>