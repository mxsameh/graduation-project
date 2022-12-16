<script lang="ts">
  
</script>


<div class="empty">
  <h1 class="empty_title">No products added to cart yet</h1>
  <button class="empty_btn">
    <a href="/" class="empty_link">
      go shopping
    </a>
  </button>
</div>

<style lang="scss">
  .empty{
    display: flex;
    flex-direction: column;
    gap: 40px;
    margin-top:24px;
    align-items: center;

    &_title{
      font-size: clamp(24px ,3vw, 120px);
      text-align: center;
    }
    &_btn{
      width: clamp(200px, 40%, 500px);
    }
    &_link{
      font-size: 20px;
      text-transform: capitalize;
      border-radius: 4px;
      padding: 12px 0;
      display: block;
      background-color: var(--color-2);
      color: black;
      transition: all .1 linear;
      &:hover{
        background-color: black;
        color: var(--color-2);
      }
      &:active{
        scale: .9;
      }
    }
  }
  
</style>