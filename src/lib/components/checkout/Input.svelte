<script lang="ts">
  export let input : any;
</script>

<div class="info">
  <label class="label" for={input.id}>{input.label}</label>
  <input class="input" id={input.id} type="text" placeholder={input.placeholder}>
</div>

<style lang="scss">
  .info{
    flex:0 0 50%;
    padding: 0 16px;
    margin-bottom: 20px;
  }
  .label{
    text-transform: capitalize;
    font-size: 18px;
    color: #333;
  }
  .input{
    margin-top: 8px;
    font-size: 16px;
    color: #555;
    border: 1px solid #555;
    padding: 8px 12px;
    width: 100%;
  }
  
</style>