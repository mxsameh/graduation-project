<script lang="ts">
	export let orderDate: any;
	export let orderTime: any;
	export let orderTotal: any;
	export let orderShipping: any;
	export let orderTaxes: any;
	export let delivered: any;
</script>

<div class={delivered ? 'header delivered' : 'header'}>
	<div class="header_date">
		<h3 class="header_heading">Date</h3>
		<p class="header_text">{orderDate}</p>
	</div>
	<div class="header_time">
		<h3 class="header_heading">time</h3>
		<p class="header_text">{orderTime}</p>
	</div>
	<div class="header_shipping">
		<h3 class="header_heading">shipping</h3>
		<p class="header_text">{orderShipping} L.E</p>
	</div>
	<div class="header_taxes">
		<h3 class="header_heading">taxes</h3>
		<p class="header_text">{orderTaxes || 0} L.E</p>
	</div>
	<div class="header_total">
		<h3 class="header_heading">total</h3>
		<p class="header_text">{orderTotal} L.E</p>
	</div>
</div>

<style lang="scss">
	.delivered {
		background-color: #aaa !important;
	}
	.header {
		padding: 12px 24px;
		background-color: var(--color-3);
		display: flex;
		&_heading {
			font-size: 16px;
			text-transform: uppercase;
			color: white;
			text-align: right;
		}
		&_text {
			font-size: 16px;
			color: #555;
			margin-top: 12px;
			text-align: right;
		}
		&_date {
			margin-right: 40px;
		}
		&_shipping {
			margin-left: auto;
		}
		&_taxes {
			margin-left: 24px;
		}
		&_total {
			margin-left: 40px;
		}
	}
</style>
