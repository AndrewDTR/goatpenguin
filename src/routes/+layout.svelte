<script lang="ts">
	import './layout.css';
	let { children } = $props();
</script>

<svelte:head><link rel="icon" href="/goatpenguin.ico" /></svelte:head>
{@render children()}
