<script lang="ts">
 export let sizes : any;
  
</script>

<div class="sizes">
<h3 class="sizes_title">sizes:</h3>
<div class="sizes_options">
  {#each sizes as size }
  <div class="size">
    <input class="size_btn" type="radio" name="size" id={size}>
    <label class="size_label" for={size}>{size}</label>
  </div>
  
  {/each}
</div>
</div>

<style lang="scss">

  .sizes{
    display: flex;
    gap: 16px;
    text-transform: capitalize;
    margin-top: 32px;
  
    &_title{
      font-weight: bold;
      font-size: 20px;
      color: #333;
    }
    &_options{
      display: flex;
      gap: 24px;
    }
  }

  .size{
    display: flex;
    gap: 8px;
    align-items: center;
    cursor: pointer;
    &_label{
      color: #555;
      font-size: 16px;
      text-transform: uppercase;
      cursor: pointer;
    }
    &_btn{
      width: 20px;
      height: 20px;
      cursor: pointer;
    }
  }
  
</style>