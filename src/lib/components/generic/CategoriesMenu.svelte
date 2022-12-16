<script lang="ts">
  let categories = ['category 1','category 2', 'category 3', 'category 4', 'category 5', 'category 6']

  let menuOpened = false
  let menu : any;
  const openMenu = () =>
  { 
    menuOpened = !menuOpened
  }
  
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<div class="categories" on:click={openMenu}>
  <svg class="categories_icon" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M5.11111 48.3333C4.22963 48.3333 3.49126 48.0347 2.896 47.4373C2.29867 46.8421 2 46.1037 2 45.2222C2 44.3407 2.29867 43.6024 2.896 43.0071C3.49126 42.4098 4.22963 42.1111 5.11111 42.1111H54.8889C55.7704 42.1111 56.5087 42.4098 57.104 43.0071C57.7013 43.6024 58 44.3407 58 45.2222C58 46.1037 57.7013 46.8421 57.104 47.4373C56.5087 48.0347 55.7704 48.3333 54.8889 48.3333H5.11111ZM5.11111 32.7778C4.22963 32.7778 3.49126 32.4791 2.896 31.8818C2.29867 31.2865 2 30.5481 2 29.6667C2 28.7852 2.29867 28.0458 2.896 27.4484C3.49126 26.8532 4.22963 26.5556 5.11111 26.5556H54.8889C55.7704 26.5556 56.5087 26.8532 57.104 27.4484C57.7013 28.0458 58 28.7852 58 29.6667C58 30.5481 57.7013 31.2865 57.104 31.8818C56.5087 32.4791 55.7704 32.7778 54.8889 32.7778H5.11111ZM5.11111 17.2222C4.22963 17.2222 3.49126 16.9246 2.896 16.3293C2.29867 15.732 2 14.9926 2 14.1111C2 13.2296 2.29867 12.4902 2.896 11.8929C3.49126 11.2976 4.22963 11 5.11111 11H54.8889C55.7704 11 56.5087 11.2976 57.104 11.8929C57.7013 12.4902 58 13.2296 58 14.1111C58 14.9926 57.7013 15.732 57.104 16.3293C56.5087 16.9246 55.7704 17.2222 54.8889 17.2222H5.11111Z" />
  </svg>
  <h2 class="categories_title">categories</h2>
  <ul class="categories_menu" bind:this={menu} class:menu-is-active={menuOpened}>
    {#each categories as category}
      <li class="category">
        <a class="category_link" href={`/category/${category}`}>{category}</a>
        <svg class="category_icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M6.49327 21.5067C6.16442 21.1779 6 20.7593 6 20.2511C6 19.7429 6.16442 19.3244 6.49327 18.9955L13.4888 12L6.49327 5.00448C6.16442 4.67564 6 4.2571 6 3.74888C6 3.24066 6.16442 2.82212 6.49327 2.49327C6.82212 2.16442 7.24066 2 7.74888 2C8.2571 2 8.67564 2.16442 9.00448 2.49327L17.2556 10.7444C17.435 10.9238 17.5623 11.1181 17.6377 11.3274C17.7118 11.5366 17.7489 11.7608 17.7489 12C17.7489 12.2392 17.7118 12.4634 17.6377 12.6726C17.5623 12.8819 17.435 13.0762 17.2556 13.2556L9.00448 21.5067C8.67564 21.8356 8.2571 22 7.74888 22C7.24066 22 6.82212 21.8356 6.49327 21.5067V21.5067Z" />
        </svg>
      </li>
    {/each}
  </ul>
</div>

<style lang="scss">
.categories{
  display: flex;
  gap: 8px;
  position: relative;
  padding: 16px 0;
  cursor: pointer;

  &_title{
    text-transform: capitalize;
    color: white;
  }
  &_icon{
    width: 28px;
    fill: black;
  }
  &_menu{
    position: absolute;
    top: 100%;
    // background-color: #eee;
    background-color: var(--color-1);
    z-index: 1;
    width: clamp(200px, 40vw, 400px);
    box-shadow: 4px 12px 16px rgba(0,0,0,.2);
    height: 0px;
    overflow: hidden;
  transition: all .2s ease-in;
  }
}
.menu-is-active{
  height: 311px;
}



.category{
  padding: 16px 24px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  &:not(:first-child){
    border-top: 1px solid rgb(212, 212, 212);
  }
  &:hover &_icon{
    fill: var(--color-4);
  }

  &_link{
    text-transform: capitalize;
    color: #333;
  }
  &_icon{
    width: 16px;
    fill: #555;
  }
}

  
</style>