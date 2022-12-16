<script lang="ts">

  export let stars : number = 4.5;
  export let reviews : number = 99;

  let fullStars = Math.floor(stars);
  let halfStars = stars - fullStars ? 1 : 0;
  
</script>

<div class="reviews">
  <div class="reviews_starts">
    {#each Array(fullStars) as star }
    <svg class="star-icon"  viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M5.825 22L7.45 14.975L2 10.25L9.2 9.625L12 3L14.8 9.625L22 10.25L16.55 14.975L18.175 22L12 18.275L5.825 22Z" fill="#FFD333"/>
    </svg>
    {/each}
    {#each Array(halfStars) as star }
    <svg class="star-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 8.125V15.925L15.15 17.85L14.325 14.25L17.1 11.85L13.45 11.525L12 8.125ZM5.825 22L7.45 14.975L2 10.25L9.2 9.625L12 3L14.8 9.625L22 10.25L16.55 14.975L18.175 22L12 18.275L5.825 22Z" fill="#FFD333"/>
    </svg>
    {/each}
  </div>
  <p class="reviews_number">({reviews})</p>
</div>


<style>
  .reviews{
    display: flex;
    align-items: center;
    gap: 4px;
    width: fit-content;
  }
  .reviews_starts{
    display: flex;
    gap: 4px;
  }

  .star-icon{
    width: 16px;
  }
  .reviews_number{
    font-size: 14px;
    color: #555;
  }
  
</style>