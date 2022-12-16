<script lang="ts">
	import DealCard from "./DealCard.svelte";
	import Title from "./Title.svelte";

  let deals = [
    {
      image : '/groc.jpg',
      offer : 'save 20% ',
      text : 'special offer'
    },
    {
      image : '/groc.jpg',
      offer : 'sale 40%',
      text : 'special offer'
    },
  ]
  
</script>

<section class="deals">
  <Title title={`today's deals`} />

  <div class="deals_gallery">
    {#each deals as deal }
    <DealCard {deal}/>
    {/each}
  </div>

</section>

<style lang="scss">
  .deals{
    margin-top: 56px;

    &_gallery{
      margin-top: 24px;
      display: grid;
      grid-template-columns: 6fr 4fr;
      grid-template-rows: 300px;
      gap: 24px;
    }
  }
</style>