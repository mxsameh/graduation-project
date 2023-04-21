<script lang='ts'>
	import { page } from "$app/stores";
	import Header from "$lib/components/seller/Header.svelte";
  import AddPopup from "$lib/components/seller/ProductPopup.svelte"
	import { onMount } from "svelte";
	import Dashboard from "$lib/components/admin/Dashboard.svelte";
  
  export let data;

  const seller = data.seller
  const sellerToken = data.sellerToken
  const origin = $page.url.origin + `/api/sellers/${seller.id}`

  let products : any;
  let isPopupOpened = false

  let tabs = [
    {name: 'products', itemsUrl:`${origin}/products`},
    {name: 'orders', itemsUrl:`${origin}/orders`}
  ]

  // const getProducts = async() =>
  // {
  //   const response = await fetch(`${origin}/api/sellers/${seller.id}/products`)
  //   const body = await response.json()
  //   const products = body.products
  //   return products
  // }


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

    // getProducts().then(data=>products = data)
    // isPopupOpened = false 
  }

</script>

<Header on:addButtonClicked={handleAddClick}/>
{#if isPopupOpened}
<AddPopup close={handleClose} on:submitClicked={handleSubmit}/>
{/if}

<main class="main">
  <Dashboard {tabs} token={sellerToken}/>
</main>

<style lang='scss'>
  .main{
    width: 100%;
    height: calc(100vh - 80px);
  }
  
</style>