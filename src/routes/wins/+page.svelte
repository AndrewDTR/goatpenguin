<script>
	import { onMount } from 'svelte';
	let count = $state(0);

	onMount(() => {
		Object.keys(localStorage).forEach((obj) => {
			let temp = JSON.parse(localStorage[obj]);
			if (temp?.gameState === 'win') {
				count += 1;
			}
		});
	});
</script>

<p class="text-white">you've won {count} goatpenguins</p>
