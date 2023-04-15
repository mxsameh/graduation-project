<script lang="ts">
  export let category : any;
  
</script>

<div class="category">
  <img class="category_img" src={category.image} alt="">
  <div class="category_info">
    <h3 class="category_name">{category.name}</h3>
    <p class="category_products-count">{category.productsNumber} products</p>
  </div>
</div>

<style lang="scss">
  .category{
    flex-basis: calc((100% - 24px * 3) / 4);
    display: flex;
    gap: 16px;
    width: 100%;
    height: 100px;
    background-color: white;
    align-items: center;
    padding: 8px;
    border-radius: 4px;
    overflow: hidden;

    &_img{
      height: 100px;
      flex-basis: 50%;
    }
    &_info{
      flex-basis: 50%;
    }
    &_name{
      font-size: 16px;
      text-transform: capitalize;
    }
    &_products-count{
      font-size: 14px;
      color: #333;
      margin-top: 12px;
    }
  }
  
</style>