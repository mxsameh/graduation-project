<script lang="ts">
    export let user : any;

</script>

<li class="user">
    <div class="info">
        <h3 class="info_label">name</h3>
        <p class="info_text">{user.name}</p>
    </div>
    <div class="info">
        <h3 class="info_label">email</h3>
        <p class="info_text info_email">{user.email}</p>
    </div>
    <div class="info">
        <h3 class="info_label">role</h3>
        <p class="info_text">{user.type}</p>
    </div>
    <div class="info">
        <h3 class="info_label">phone</h3>
        <p class="info_text">+20 {user.phone}</p>
    </div>
</li>

<style lang="scss">
    .user{
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
        &_email{
            text-transform: none;
        }
    }

</style>