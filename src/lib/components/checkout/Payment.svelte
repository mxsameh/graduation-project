<script lang="ts">
	import Title from "../home-page/Title.svelte";


  const handleSubmit = (e : any) =>
  {
    let x  = e.target.payment.value
  }

  
</script>

<div class="payment">
  <Title title={'payment'} />

  <form class="payment_form" on:submit|preventDefault={handleSubmit}>
    <div class="cash">
      <input class="input" type="radio" name="payment" id="cash" value="cash">
      <label class="label" for="cash">cash on delivery</label>
    </div>
    <div class="credit">
      <input class="input" type="radio" name="payment" id="credit" value="credit">
      <label class="label" for="credit">credit card</label>
    </div>
    <button class="submit">place order</button>
  </form>

</div>


<style lang="scss">
  .payment{
    margin-top: 40px;
    width: 100%;

    &_form{
      margin-top: 24px;
      background-color: white;
      padding: 30px;
    }
  }

  .credit, .cash{
    margin-bottom: 20px;
    display: flex;
    gap: 8px;
    align-items: center;
  }
  .label{
    color: #555;
    text-transform: capitalize;
    font-size: 16px;
  }
  .input{
    width: 20px;
    height: 20px;
  }
  .submit{
    width: 60%;
    max-width: 500px;
    text-align: center;
    display: block;
    margin: 40px auto 0; 
    text-transform: capitalize;
    font-size: 20px;
    font-weight: 500;
    background-color: var(--color-3);
    padding: 10px;
  }

</style>