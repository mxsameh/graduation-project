<script lang="ts">
	import { goto } from "$app/navigation";
	import cartStore from "$lib/stores/cart";
	import { getSubtotal } from "$lib/utils/cart";

  let shipping = 0
  $:cartItems = $cartStore.products
  $:subtotal = getSubtotal(cartItems)
  $:shipping = cartItems.length ? 50 : 0
  $:total = subtotal + shipping

  const proceed = () =>
  {
    if($cartStore.products.length)
    {
      goto('/checkout')
    }
  }

</script>

<div class="summary">
  <div class="subtotal">
    <h3 class="title">subtotal</h3>
    <p class="fee">{subtotal} L.E</p>
  </div>
  <div class="shipping">
    <h3 class="title">shipping</h3>
    <p class="fee">{shipping} L.E</p>
  </div>

  <div class="total">
    <h2 class="title">total</h2>
    <p class="fee">{total} L.E</p>
  </div>

  <button class="proceedBtn" on:click={proceed}>proceed to checkout</button>

</div>

<style lang="scss">
  .summary{
    padding: 30px;
    background-color: white;
    margin-top: 24px;
  }
  .title{
    text-transform: capitalize;
  }
  .shipping, .subtotal{
    display: flex;
    justify-content: space-between;
    margin-bottom: 18px;
    color: #333;
    .title, .fee{
      font-size: 16px;
      font-weight: 500;
    }
  }

  .total{
    display: flex;
    justify-content: space-between;
    margin-top: 24px;
    padding-top: 24px;
    border-top: 2px solid var(--color-1);
    .title, .fee{
      font-size: 20px;
      color: #222;
    }
  }

  .proceedBtn{
    width: 100%;
    padding: 16px;
    background-color: var(--color-3);
    color: white;
    font-size: 16px;
    text-transform: capitalize;
    margin-top: 40px;
    cursor: pointer;
    transition: 0.1s;
    &:active{
      scale: .9;
    }
    &:hover{
      background-color: var(--color-4);
    }
  }

  
</style>