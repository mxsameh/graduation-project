<script lang="ts">

  export let deal : any;
  
</script>


<div class="deal" style:background-image={`url(${deal.image})`}>
  <p class="deal_offer">{deal.offer}</p>
  <h2 class="deal_text">{deal.text}</h2>
  <button class="deal_btn">shop now</button>
</div>


<style lang="scss">
  .deal{
    width: 100%;
    overflow: hidden;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: white;

    &_offer{
      font-size: 16px;
      text-transform: uppercase;
    }
    &_text{
      font-size: 28px;
      margin-top: 16px;
      text-transform: capitalize;
    }
    &_btn{
      background-color: bisque;
      padding: 8px 24px;
      color: black;
      text-transform: capitalize;
      font-size: 16px;
      margin-top: 28px;
    }
  }
  
</style>