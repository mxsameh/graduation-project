<script lang="ts">
	export let title: String;
</script>

<h1 class="title"><span>{title}</span></h1>

<style lang="scss">
	.title {
		text-transform: uppercase;
		color: #333;
		font-size: 32px;
		position: relative;
		span {
			background-color: var(--color-1);
			padding-right: 16px;
		}
		&::after {
			content: '';
			position: absolute;
			width: 100%;
			left: 0;
			top: 50%;
			border: 1px dashed var(--color-2);
			z-index: -1;
		}
	}
</style>
