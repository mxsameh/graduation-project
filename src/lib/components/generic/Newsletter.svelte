<script>
  
</script>


  <div class="newsletter">
    <h2 class="newsletter_title">newsletter</h2>
    <p class="newsletter_text">Sign up now to keep updates with the latest updates and releases</p>
    <div class="newsletter_input">
      <input class="newsletter_email" type="text" name="" placeholder="Enter Email" >
      <button class="newsletter_btn">sign up</button>
    </div>

  </div>

<style lang="scss">
  .newsletter{
    margin-top: 40px;
    display: flex;
    flex-direction: column;
    align-items: center;

    &_title{
      font-size: 20px;
      color: #333;
      text-transform: uppercase;
    }
    &_text{
      margin-top: 16px;
      font-size: 18px;
      color: #555;
    }
    &_input{
      margin-top: 16px;
      display: flex;
      gap: 8px;
    }
    &_email{
      padding: 8px 24px;
      border: none;
      outline: none;
      font-size: 16px;
      width: clamp(200px, 25vw, 700px);
    }
    &_btn{
      background-color: var(--color-3);
      padding: 8px 24px;
      font-size: 16px;
      text-transform: capitalize;
    }
  }




  
</style>