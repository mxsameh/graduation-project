<script lang="ts">
    export let product : any;

</script>

<li class="product">
    <div class="info">
        <h3 class="info_label">name</h3>
        <p class="info_text">{product.name}</p>
    </div>
    <div class="info">
        <h3 class="info_label">category</h3>
        <p class="info_text">{product.category}</p>
    </div>
    <div class="info">
        <h3 class="info_label">price</h3>
        <p class="info_text">{product.price}</p>
    </div>
    <div class="info">
        <h3 class="info_label">seller id</h3>
        <p class="info_text">{product.sellerId}</p>
    </div>
</li>

<style lang="scss">
    .product{
        display: flex;
        flex-wrap: wrap;
        background-color: white;
        border-radius: 12px;
        margin-bottom: 24px;
        padding: 16px 16px 4px;
    }
    .info{
        flex: 1 1 50%;
        margin-bottom: 16px;

        &_label{
            text-transform: uppercase;
            font-size: 16px;
            margin-bottom: 8px;
        }
        &_text{
            font-size: 16px;
            color: #333;
            text-transform: capitalize;
        }
    }

</style>