<script lang='ts'>
	import { page } from "$app/stores";
	import Header from "$lib/components/seller/Header.svelte";
	import ProductsList from "$lib/components/seller/ProductsList.svelte";
  import AddPopup from "$lib/components/seller/ProductPopup.svelte"
	import { onMount } from "svelte";
  
  export let data;
  const seller = data.seller
  const origin = $page.url.origin
  let products : any;
  let isPopupOpened = false

  const getProducts = async() =>
  {
    const response = await fetch(`${origin}/api/sellers/${seller.id}/products`)
    const body = await response.json()
    const products = body.products
    return products
  }


  onMount(() =>
  {
    getProducts().then(data=>products = data)
  })
  
  const handleAddClick = () =>
  {
    // open popup
    isPopupOpened = true
  }
  
  const handleClose = () =>
  {
    isPopupOpened = false
  }
  const handleSubmit = async (e : any) =>
  {
    const newProduct = {...e.detail.product, sellerId : seller.id }
    const response = await fetch(`${origin}/api/products`,{
      method : "POST",
      body : JSON.stringify({product : newProduct})
    })

    getProducts().then(data=>products = data)
    isPopupOpened = false 
  }

</script>

<Header on:addButtonClicked={handleAddClick}/>
{#if isPopupOpened}
<AddPopup close={handleClose} on:submitClicked={handleSubmit}/>
{/if}

<main class="main">
  {#if products}
    <ProductsList {products}/>
  {:else}
  <h1>loading....</h1>
  {/if}
</main>

<style lang='scss'>
  .main{
    margin: 24px;
  }
  
</style>