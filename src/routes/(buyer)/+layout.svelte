<script>
	import Footer from '$lib/components/generic/Footer.svelte';
  import Header from '$lib/components/generic/Header.svelte';
  export let data;

  let user = data.user

</script>

<Header {user} />
<slot />
<Footer />

<style>
  
</style>