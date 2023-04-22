<script lang='ts'>
  let email: string
  let password: string

</script>

<form class="form" method="POST">
  <label class="label" for="email">email</label>
  <input type="email" class="input" id="email" name="email" bind:value={email}>

  <label class="label" for="password">password</label>
  <input type="password" class="input" id="password" name="password" bind:value={password}>

  <button class="login-btn">login</button>
</form>

<style lang='scss'>
  .form{
    display: flex;
    flex-direction: column;
    width: 100%;
    margin-top: 10vh;
  }
  .label{
    font-size: 18px;
    text-transform: capitalize;
    margin-top: 24px;
  }
  .input{
    font-size: 16px;
    margin-top: 12px;
    padding: 12px 16px;
    width: 100%;
    border: 2px solid var(--color-2);
    background-color: transparent;
  }

  .login-btn{
    padding: 12px 40px;
    width: 100%;
    font-size: 18px;
    text-transform: capitalize;
    background-color: var(--color-4);
    border-radius: 4px;
    margin-top: 40px;
    color: white;
    text-transform: uppercase;
    transition: all .1s linear;
    &:hover{
      cursor: pointer;
      scale: 1.05;
    }
  }
  
</style>