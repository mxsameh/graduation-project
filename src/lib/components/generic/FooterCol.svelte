<script lang="ts">
  export let col : any;
</script>

<div class="col">
	<h2 class="col_title">{col.title}</h2>
	<ul class="col_list">

    {#each col.items as item}
		<a class="col_item" href={item.link}>
			<svg class="col_item-icon"
				width="24"
				height="24"
				viewBox="0 0 24 24"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					d="M6.49327 21.5067C6.16442 21.1779 6 20.7593 6 20.2511C6 19.7429 6.16442 19.3244 6.49327 18.9955L13.4888 12L6.49327 5.00448C6.16442 4.67564 6 4.2571 6 3.74888C6 3.24066 6.16442 2.82212 6.49327 2.49327C6.82212 2.16442 7.24066 2 7.74888 2C8.2571 2 8.67564 2.16442 9.00448 2.49327L17.2556 10.7444C17.435 10.9238 17.5623 11.1181 17.6377 11.3274C17.7118 11.5366 17.7489 11.7608 17.7489 12C17.7489 12.2392 17.7118 12.4634 17.6377 12.6726C17.5623 12.8819 17.435 13.0762 17.2556 13.2556L9.00448 21.5067C8.67564 21.8356 8.2571 22 7.74888 22C7.24066 22 6.82212 21.8356 6.49327 21.5067V21.5067Z"
					fill="black"
				/>
			</svg>
			<span class="col_item-text">{item.name}</span>
		</a>
    {/each}

	</ul>
</div>

<style lang="scss">
  .col{
    &_title{
      text-transform: uppercase;
      font-size: 20px;
      color: #333;
    }
    &_list{
      margin-top: 24px;
    }
    &_item{
      display: flex;
      align-items: center;
      gap: 8px;
      &-icon{
        width: 16px;
        fill: #333;
      }
      &-text{
        font-size: 16px;
        text-transform: capitalize;
        color: #333;
      }
    }
  }
</style>
