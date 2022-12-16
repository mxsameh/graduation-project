<script lang="ts">
	import Billing from "$lib/components/checkout/Billing.svelte";
	import OrderTotal from "$lib/components/checkout/OrderTotal.svelte";
	import Cart from "$lib/stores/cart";

  let products = $Cart.products
</script>


<main class="main">
<Billing />
<OrderTotal {products} />
</main>

<style lang="scss">
  .main{
    display: flex;
    width: 100%;
    margin: 40px 0;
  }
  
</style>