<script lang="ts">
	import Title from "../home-page/Title.svelte";
  import Input from "./Input.svelte";

  let inputs = [
    {
      label : 'first name',
      placeholder : 'Mohamed',
      id : 'firstName',
    },
    {
      label : 'last name',
      placeholder : 'Sameh',
      id : 'lastName',
    },
    {
      label : 'E-mail',
      placeholder : 'example@email.com',
      id : 'email',
    },
    {
      label : 'mobile no.',
      placeholder : '+20 01000020207',
      id : 'mobile',
    },
    {
      label : 'country',
      placeholder : 'Egypt',
      id : 'country',
    },
    {
      label : 'city',
      placeholder : 'Cairo',
      id : 'city',
    },
    {
      label : 'address',
      placeholder : '123 street',
      id : 'address',
    },
    {
      label : 'zip code',
      placeholder : '11871',
      id : 'zipCode',
    },
  ]
  
</script>


<section class="billing">

  <Title title={'billing address'} />
  <!-- BILLING ADDRESS FORM -->
  <form class="billing_form">
    {#each inputs as input}
    <Input {input} />
    {/each}
  </form>

</section>

<style lang="scss">
  .billing{
    flex-basis: 65%;
    margin: 0 16px;
    &_form{
      margin-top: 24px;
      background-color: white;
      padding: 30px;
      display: flex;
      flex-wrap: wrap;
    }
  }
  
</style>