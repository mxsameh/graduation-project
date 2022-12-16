<script lang="ts">
	import CartProduct from "./CartProduct.svelte";
	import EmptyCart from "./EmptyCart.svelte";
  export let products : any;

</script>

<table class="table">  
  <thead class="table_head">
    <tr>
      <th class="table_head_item">products</th>
      <th class="table_head_item">price</th>
      <th class="table_head_item">quantity</th>
      <th class="table_head_item">total</th>
      <th class="table_head_item">remove</th>
    </tr>
  </thead>

  <tbody>
    {#each products as product }
    <CartProduct {product} />
    {/each}
  </tbody>

</table>

{#if !products.length }
<EmptyCart/>
{/if}


<style lang="scss">
  .table{
    width: 100%;
    text-align: center;
    border-collapse: collapse;
    margin-top: 24px;
    &_head{
      background-color: var(--color-4);
      color: white;
      border-bottom: 16px solid var(--color-1);
    }
    &_head_item{
      font-size: 16px;
      text-transform: capitalize;
      padding: 12px;
    }
  }
  
</style>