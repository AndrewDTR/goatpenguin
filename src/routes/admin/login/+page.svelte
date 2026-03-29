<script lang="ts">
	let { form } = $props();
</script>

<div class="text-white">
	<h1 class="mt-4 text-xl">secret goatpenguin admin dashboard</h1>

	{#if form?.error}
		<p class="mt-2 text-red-400" role="alert">{form.error}</p>
	{/if}

	<form method="POST" class="mt-4">
		<label for="password" class="mb-1 block">Password</label>
		<input
			id="password"
			name="password"
			type="password"
			required
			minlength="6"
			autocomplete="current-password"
			class="border bg-transparent p-2"
		/>

		<button
			type="submit"
			class="mt-4 inline-block bg-blue-500 p-2 transition-colors duration-75 hover:bg-blue-600"
		>
			Sign in
		</button>
	</form>
</div>