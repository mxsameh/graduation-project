<script lang="ts">
	import Review from "../home-page/Review.svelte";
	import AddToCartBtn from "./AddToCartBtn.svelte";
  import ProductCount from "./ProductCount.svelte";
	import ProductsColors from "./ProductsColors.svelte";
	import ProductSizes from "./ProductSizes.svelte";

  export let product : any;  
  let quantity = 1;

  const handleQuantityChange = (e:any) =>
  {
    let newQuantity = e.detail.quantity;
    quantity = newQuantity;
  }
</script>

<div class="product">
  <h1 class="product_name">{product.name}</h1>
  <div class="product_reviews">
    <Review reviews={product.reviews_number} stars={product.reviews_stars} />
  </div>
  <h2 class="product_price">${product.price}</h2>
  <p class="product_description"> {product.description} </p>

  {#if product.sizes }
  <div class="product_sizes">
    <ProductSizes sizes={product.sizes}/>
  </div>
  {/if}

  {#if product.colors }
  <div class="product_colors">
    <ProductsColors colors={product.colors}/>
  </div>
  {/if}

  <div class="product_counter">
    <ProductCount on:quantityChange={handleQuantityChange} />
  </div>

  <div class="addBtn">
    <AddToCartBtn {product}{quantity} />
  </div>

</div>

<style lang="scss">

  .product{
    flex-basis: 60%;
    background-color: white;
    padding: 30px;

    &_name{
      font-size: 32px;
      font-weight: bold;
      color: #333;
      text-transform: capitalize;
    }
    &_reviews{
      margin-top: 12px;
    }
    &_price{
      font-size: 32px;
      font-weight: bold;
      margin-top: 16px;
      color: #333;
    }
    &_description{
      font-size: 16px;
      color: #555;
      margin-top: 24px;
      line-height: 24px;
    }
    &_sizes{
      margin-top: 32px;
    }
    &_colors{
      margin-top: 16px;
    }
    &_counter{
      // margin-top: 40px;
      margin: 40px auto 0;
      width: fit-content;
    }
  }

  .addBtn{
    width: 60%;
    margin: 24px auto 0;
  }
  
</style>