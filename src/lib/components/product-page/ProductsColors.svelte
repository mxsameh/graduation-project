<script lang="ts">
 export let colors : any;
  
</script>

<div class="colors">
<h3 class="colors_title">colors:</h3>
<div class="colors_options">
  {#each colors as color }
  <div class="color">
    <input class="color_btn" type="radio" name="color" id={color}>
    <label class="color_label" for={color}>{color}</label>
  </div>
  
  {/each}
</div>
</div>

<style lang="scss">

  .colors{
    display: flex;
    gap: 16px;
    text-transform: capitalize;
  
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

  .color{
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