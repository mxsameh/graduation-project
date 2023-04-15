<script lang="ts">
	import Billing from "$lib/components/checkout/Billing.svelte";
	import OrderTotal from "$lib/components/checkout/OrderTotal.svelte";
	import cartStore from "$lib/stores/cart";

</script>


<main class="main">
{#if $cartStore}
<Billing />
<OrderTotal products={$cartStore.products} />
{/if}
</main>

<style lang="scss">
  .main{
    display: flex;
    width: 100%;
    margin: 40px 0;
  }
  
</style>