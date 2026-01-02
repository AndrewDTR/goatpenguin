<script lang="ts">
	import { page } from '$app/state';
	import './layout.css';
	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href="/goatpenguin.ico" />
	<meta property="og:type" content="website" />
	<meta property="og:title" content="goatpenguin 🐐🐧" />
	<meta property="og:url" content={page.url.origin} />
	<meta property="og:image" content="https://goatpenguin.com/goatpenguin.png" />
	<meta
		property="og:description"
		content="A guessing game for fans of trivia, readers of Wikipedia, and enjoyers of penguins/goats. Released on a daily-ish basis!"
	/>
	<meta property="og:image:width" content="450" />
	<meta property="og:image:height" content="450" />
	<meta name="theme-color" content="#282828" />
	<title>goatpenguin 🐐🐧</title>
</svelte:head>
{@render children()}
