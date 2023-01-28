<script lang='ts'>
	import { goto } from "$app/navigation";
</script>

<form action="" class="signup">
  <div class="signup__info">
    <label class="signup__label" for="name">Name</label>
    <input type="text" class="signup__input" placeholder="Mohamed Sameh" id='name'>
  </div>

  <div class="signup__info">
  <label class="signup__label" for="email">email</label>
  <input type="email" class="signup__input" placeholder="example@email.com" id='email'>
  </div>

  <div class="signup__info">
  <label class="signup__label" for="mobile">mobile no.</label>
  <input type="text" class="signup__input" placeholder="01070099988" id="mobile">
  </div>

  <div class="signup__info">
  <label class="signup__label" for="password">password</label>
  <input type="password" class="signup__input" id='password'>
  </div>

  <button class="signup__create-btn" on:click={()=>{goto('/')}}>create account</button>
</form>

<style lang='scss'>
  .signup{
    display: flex;
    flex-direction: column;

    &__info{
      display: flex;
      gap:8px;
      margin-top: 24px;
      flex-direction: column;
    }
    &__label{
      font-size: 18px;
      text-transform: capitalize;
    }
    &__input{
      font-size: 16px;
      color: #555;
      border: 1px solid #555;
      padding: 8px 12px;
      width: 100%;
    }
    &__create-btn{
      width: 100%;
      background-color: var(--color-4);
      padding:12px;
      text-align: center;
      text-transform: capitalize;
      margin-top: 40px;
      border-radius: 4px;
      font-size: 18px;
      color: white;
    }
  }
  
</style>