<script lang="ts">
	import cart from "$lib/stores/cart";
	import { removeProduct } from "$lib/utils/cart";

  export let product : any;
  
  const update = () =>
  {
    cart.update(oldCart => {
      return oldCart; 
    });
  }

  const handleClick = (btn : string , id : number) =>
  {
    if(btn == 'add')
    {
      product.quantity ++
      update()
    }
    else if (btn == 'sub')
    {
      if(product.quantity == 1) return
      product.quantity --
      update()
    }
  }

  const deleteProduct = (id : number) =>
  {
    removeProduct(id)
  }

</script>

<tr class="tableRow">
  <td class="tableData">
    <div class="product">
    <img class="product_image" src={product.image} alt="">
    <p class="product_name">{product.name}</p>
    </div>
  </td>
  <td class="tableData">
    <div class="product_price">{product.price} L.E</div>
  </td>
  <td>
    <div class="counter">
      <button class="counter_btn" on:click={()=>handleClick('sub',product.id)}>-</button>
      <p class="counter_text">{product.quantity}</p>
      <button class="counter_btn" on:click={()=>handleClick('add',product.id)}>+</button>
    </div>
  </td>
  <td class="tableData">{product.quantity * product.price} L.E</td>
  <td>
    <button class="deleteBtn" on:click={()=>deleteProduct(product.id)}>x</button>
  </td>
</tr>

<style lang="scss">
  
  .tableRow{
    background-color: white;
    border-bottom: 16px solid var(--color-1);
  }
  .tableData{
    padding: 12px;
  }
  .product{
    display: flex;
    gap: 12px;
    align-items: center;

    &_image{
      width: 50px;
      height: 50px;
      object-fit: cover;
    }
    &_name{
      font-size: 16px;
      text-transform: capitalize;
    }
    &_price{
      width :130px;
    }
  }

.counter{
  display: flex;
  align-items: center;
  width: fit-content;
  margin: 0px auto;
  .counter_btn{
    width: 40px;
    height: 32px;
    font-size: 24px;
    font-weight: bold;
    background-color: var(--color-3);
    text-align: center;
    cursor: pointer;
    &:hover{
      background-color: var(--color-4);
    }
  }
  .counter_text{
    font-size: 16px;
    background-color: var(--color-1);
    // padding: 0px 14px;
    width: 50px;
    // height: 32px;
  }
}

.deleteBtn{
  margin: 0 auto;
  width: 32px;
  height: 28px;
  background-color: rgb(211, 39, 39);
  font-size: 20px;
  color: white;
  font-weight: bold;
}

  
</style>