<script lang="ts">
	import { onMount } from "svelte";


  export let images : any;

  let width : number
  let wraper : HTMLDivElement

  const resizeImages = (images : NodeListOf<HTMLImageElement>) =>
  {
    images.forEach( img => {
      img.style.width = `${width}px` 
    });
  }
  onMount(() => 
  {
    let $images = wraper.querySelectorAll('.image') as NodeListOf<HTMLImageElement>
    resizeImages($images)
    window.addEventListener('resize',()=>resizeImages($images))
  })

  
</script>

<div class="images" bind:clientWidth={width}>
  <div class="images_wraper" bind:this={wraper}>
    {#each images as image}
    <img class="image" src={image} alt=""> 
    {/each}
  </div>


</div>

<style lang="scss">
  .images{
    flex-basis: 40%;
    overflow: hidden;
    display: grid;
    place-items: center;
    background-color: white;
    &_wraper{
      display: flex;
      // width: 100%;
    }
  }
  
</style>