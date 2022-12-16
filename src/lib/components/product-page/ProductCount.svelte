<script lang="ts">
	import { createEventDispatcher } from "svelte";


  let quantity = 1;
  const dispatch = createEventDispatcher();

  const updataQuantity = () =>{
    dispatch('quantityChange',{quantity})
  }

	const add = () => {
		quantity++;
    updataQuantity();
	};
	const sub = () => {
		if (quantity == 1) return;
		quantity--;
    updataQuantity()
	};
</script>

<div class="counter">
	<button class="counter_btn" on:click={sub}>-</button>
	<p class="counter_count">{quantity}</p>
	<button class="counter_btn" on:click={add}>+</button>
</div>

<style lang="scss">
  .counter{
    display: flex;
    width: 100%;
    gap: 20px;
    align-items: center;
    font-weight: bold;

    &_btn{
      background-color: var(--color-2);
      border: none;
      outline: none;
      color: #333;
      width: 40px;
      aspect-ratio: 1;
      font-size: 24px;
      font-weight: bold;
      cursor: pointer;
    }
    &_count{
      font-size: 24px;
      color: black;
    }
  }
</style>
