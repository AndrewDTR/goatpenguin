<script lang="ts">
	let { data } = $props();
	let { id, day, acceptedGuesses, dayNum, article, friendly, categories, blurb, img, imgSize } =
		$derived(data);

	const bgClass: Record<number, string> = {
		100: 'bg-indigo-100 border-indigo-200',
		200: 'bg-indigo-200 border-indigo-300',
		300: 'bg-indigo-300 border-indigo-400',
		400: 'bg-indigo-400 border-indigo-500',
		500: 'bg-indigo-500 border-indigo-600',
		600: 'bg-indigo-600 border-indigo-700',
		700: 'bg-indigo-700 border-indigo-800',
		800: 'bg-indigo-800 border-indigo-900',
		900: 'bg-indigo-900 border-indigo-950'
	};

	let dayMake = $derived(`day${dayNum}`);
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

		<form method="POST" action="?/update">
			<div class="mt-4">
				<p class="font-bold text-white">ID/Date (YYYY-MM-DD)</p>

				<input bind:value={id} class="w-full text-black" name="id" required />

				<p class="font-bold text-white">Article</p>

				<input bind:value={article} class="w-full text-black" name="article" required />

				<p class="mt-2 font-bold text-white">Friendly</p>

				<input bind:value={friendly} class="w-full text-black" name="friendly" required />

				<p class="mt-2 font-bold text-white">Day (string)</p>

				<input bind:value={dayMake} class="text-black" name="day" required />

				<p class="mt-2 font-bold text-white">dayNum (number)</p>

				<input bind:value={dayNum} class="text-black" name="dayNum" type="number" required />

				<p class="mt-2 font-bold text-white">Blurb</p>

				<textarea bind:value={blurb} class="h-48 w-full text-black" name="blurb" required
				></textarea>

				<p class="mt-2 font-bold text-white">Accepted Guesses (JSON list for now)</p>

				<input
					bind:value={acceptedGuesses}
					class="w-full text-black"
					name="acceptedGuesses"
					required
					oninvalid={(e) => e.target.setCustomValidity('Must be valid JSON')}
					oninput={(e) => {
						try {
							JSON.parse(e.target.value);
							e.target.setCustomValidity('');
						} catch {
							e.target.setCustomValidity('Must be valid JSON');
						}
					}}
				/>

				<p class="mt-2 font-bold text-white">Image link</p>

				<input bind:value={img} class="w-full text-black" name="img" required />

				<p class="mt-2 font-bold text-white">Image size</p>

				<input bind:value={imgSize} class=" text-black" name="imgSize" required />

				<p class="mt-2 font-bold text-white">Clues</p>

				<div>
					{#each categories as category, idx (category)}
						<div
							class={`flex h-12 w-full items-center justify-center border border-indigo-500 text-white ${bgClass[500 + idx * 100]}`}
						>
							<input
								class="w-lg border-2 border-white bg-[#ffffff19] text-center text-white"
								value={category}
								name={idx}
								required
							/>
						</div>
					{/each}
				</div>
			</div>
			<button
				class="active:border-purple:800 mt-2 h-12 w-32 cursor-pointer border border-purple-700 bg-purple-900 text-white hover:border-purple-800 hover:bg-purple-950 active:bg-purple-600"
				>Submit</button
			>
		</form>
	</div>
</div>
