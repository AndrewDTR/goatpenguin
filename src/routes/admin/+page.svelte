<script lang="ts">
	let { data } = $props();
	let { games } = $derived(data);
</script>

<div class="flex min-h-screen w-full flex-wrap justify-center">
	<div class="m-4 flex w-full max-w-3xl flex-col">
		<div
			class="flex h-auto flex-wrap items-center justify-center gap-x-2
         border border-indigo-800 bg-indigo-950 p-2
         sm:h-20 sm:flex-nowrap"
		>
			<img
				class="h-12 w-12 object-cover sm:h-20 sm:w-20"
				src="/goatpenguin.png"
				alt="Goat with a penguin shirt on"
			/>

			<p
				class="inline-block min-w-0 -translate-y-1 bg-linear-to-r from-indigo-200 to-indigo-400 bg-clip-text text-4xl leading-[1.15] font-bold text-transparent sm:text-6xl"
			>
				goatpenguin admin
			</p>
		</div>

		<table class="mt-4 text-white w-full">
			<thead class="border border-indigo-800 bg-indigo-950">
				<tr>
					<td class="p-2">Date</td>
					<td class="p-2">Number</td>
					<td class="p-2">Game</td>
					<td class="p-2">Edit</td>
				</tr>
			</thead>
			<tbody>
				{#each games as game (game.id)}
					<tr class="border border-[#796bfc5f]">
						<td class="p-1 py-2">{game.id}</td>
						<td>{game.dayNum}</td>
						<td>{game.friendly}</td>
						<td>
							<a href={`/admin/${game.dayNum}`}>
								<button class="cursor-pointer bg-blue-500 p-2 hover:bg-blue-600">Edit</button>
							</a>
						</td>
					</tr>
				{/each}
			</tbody>
		</table>
	</div>
</div>
