<script lang="ts">
	import { getSubtotal } from '$lib/utils/cart';
	import Title from '../home-page/Title.svelte';
	import Payment from './Payment.svelte';

	export let products: any;

	let shipping = 50;
  let subtotal = getSubtotal(products)

	const total = subtotal + shipping;
</script>

<section class="order">
	<Title title={'order total'} />

	<div class="invoice">
		<div class="products">
			<h3 class="products_title">products</h3>
			<ul>
				{#each products as product}
					<li class="product">
						<span class="product_name">{product.name}</span>
						<span class="product_price">${product.price}</span>
					</li>
				{/each}
			</ul>
		</div>
		<div class="subtotal">
			<h3 class="subtotal_title">subtotal</h3>
			<span class="subtotal_price">${subtotal}</span>
		</div>
		<div class="shipping">
			<h3 class="shipping_title">shipping</h3>
			<span class="shipping_price">${shipping}</span>
		</div>
		<div class="total">
			<h3 class="total_title">total</h3>
			<span class="total_price">${total}</span>
		</div>
	</div>

  <Payment />
</section>

<style lang="scss">
	.order {
    flex-basis: 35%;
		margin: 0 16px;
	}
	.invoice {
    background-color: white;
    margin-top: 24px;
    padding: 30px;
	}
  .products{
    border-bottom: 1px solid #555;
    margin-bottom: 24px;
    &_title{
      margin-bottom: 16px;
      color: #333;
      text-transform: capitalize;
      font-size: 18px;
    }
  }
  .product{
    display: flex;
    justify-content: space-between;
    margin-bottom: 16px;
    &_name, &_price{
      font-size: 16px;
      color: #555;
      text-transform: capitalize;
    }
  }

  .subtotal, .shipping{
    display: flex;
    justify-content: space-between;
    padding-bottom: 16px;

    &_title{
      color: #333;
      text-transform: capitalize;
      font-size: 18px;
    }
  }

  .shipping{
    border-bottom: 1px solid #555;
  }

  .total{
    margin-top: 24px;
    display: flex;
    justify-content: space-between;
    &_title, &_price{
      font-size: 20px;
      text-transform: capitalize;
    }
  }


</style>
