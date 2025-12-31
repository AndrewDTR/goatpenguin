<script lang="ts">
	import { browser } from '$app/environment';
	let { data } = $props();
	let { day, acceptedGuesses, article, friendly, categories } = $derived(data);

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

	let revealed = $state(1);
	let gameState = $state('guessing');
	let answer = $state('');

	if (browser) {
		const dayJSON = localStorage.getItem(day);

		if (dayJSON != null) {
			const currDay = JSON.parse(dayJSON);

			revealed = Number(currDay.revealed);
			gameState = currDay.gameState;
		}
	}

	function checkAnswer(ans: string) {
		if (ans.toLowerCase() == article.toLowerCase()) {
			return true;
		} else {
			return false;
		}
	}

	function handleAnswer(e: SubmitEvent) {
		e.preventDefault();

		revealed += 1;

		if (browser) {
			localStorage.setItem(day, JSON.stringify({ revealed, gameState }));
		}

		if (acceptedGuesses.includes(answer.replaceAll("'", ''))) {
			gameState = 'win';

			if (browser) {
				localStorage.setItem(day, JSON.stringify({ revealed, gameState }));
			}

			return;
		}

		if (revealed > 5) {
			gameState = 'loss';
			if (browser) {
				localStorage.setItem(day, JSON.stringify({ revealed, gameState }));
			}
		}

		answer = '';
	}

	async function copy() {
		let text = 'https://gp.dtr.lol\n\n';

		for (let i = 1; i < 6; i++) {
			if (revealed > i) {
				if (gameState === 'win') {
					text += '🐐\n';
				} else {
					text += '🐧\n';
				}
			}
		}

		if (gameState == 'win') {
			text += '✅';
		}

		if (gameState == 'loss') {
			text += '❌';
		}

		await navigator.clipboard.writeText(text);
	}
</script>

<div class="flex min-h-screen w-full justify-center">
	<div class="m-4 flex max-w-3xl flex-col">
		<div
			class="flex h-20 items-center justify-center gap-2 border border-indigo-800 bg-indigo-950 p-2"
		>
			<img
				class="h-20 w-20 object-cover"
				src="/goatpenguin.png"
				alt="Goat with a penguin shirt on"
			/>
			<p class="-translate-y-2 text-6xl leading-none font-bold text-white">goatpenguin</p>
			<p class="font-bold text-white">by Draw</p>
		</div>

		<p class="mt-4 text-white">
			My attempt at a game that's something in between <a
				href="https://www.linkedin.com/games/pinpoint">Pinpoint</a
			> and Catfishing. Can you guess the Wikipedia article given five of its article categories (in decreasing
			difficulty)?
		</p>

		{#if gameState === 'guessing'}
			<div class="mt-4">
				{#each categories as category, idx}
					<div
						class={`flex h-12 w-full items-center justify-center border border-indigo-500 text-white italic ${bgClass[500 + idx * 100]}`}
					>
						{idx <= revealed - 1 ? category : '???'}
					</div>
				{/each}
			</div>

			<form class="mt-4 w-full" onsubmit={handleAnswer}>
				<input bind:value={answer} class="block h-12 w-full" placeholder="Place your guess here" />
			</form>
		{:else if gameState === 'win'}
			<div
				class={`mt-4 flex h-12 w-full items-center justify-center border border-green-500 bg-green-800 text-white`}
			>
				You go(a)t it!
			</div>

			<p class="mt-2 text-xl font-bold text-white">Correct article: <i>{friendly}</i></p>
			<button
				onclick={copy}
				class="mt-2 h-12 w-64 cursor-pointer border border-purple-700 bg-purple-900 text-white"
				>Copy game result to clipboard</button
			>
		{:else if gameState === 'loss'}
			<div
				class={`mt-4 flex h-12 w-full items-center justify-center border border-red-500 bg-red-800 text-white`}
			>
				Not today...
			</div>

			<p class="mt-2 text-xl font-bold text-white">Correct article: <i>{friendly}</i></p>
			<button
				onclick={copy}
				class="mt-2 h-12 w-64 cursor-pointer border border-purple-700 bg-purple-900 text-white"
				>Copy game result to clipboard</button
			>
		{/if}
	</div>
</div>
