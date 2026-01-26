<script lang="ts">
	import { browser } from '$app/environment';
	import { page } from '$app/state';
	import { stringSimilarity } from 'string-similarity-js';
	import { Confetti } from 'svelte-confetti';

	let { data } = $props();
	let { day, acceptedGuesses, dayNum, article, friendly, categories, blurb, img } = $derived(data);

	type Game = {
		revealed: number;
		gameState: 'guessing' | 'win' | 'loss';
		guesses: string[];
	};

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
	let guesses: string[] = $state([]);
	let copied = $state(false);
	let streak = $state(0);

	if (browser) {
		const dayJSON = localStorage.getItem(day);

		if (dayJSON != null) {
			const currDay: Game = JSON.parse(dayJSON);

			revealed = Number(currDay.revealed);
			gameState = currDay.gameState;
			guesses = currDay.guesses;

			if (gameState === 'win') {
				streak = checkStreak();
			}
		}
	}

	function checkStreak() {
		for (let i = dayNum; i > 0; i--) {
			const dayKey = `day${i}`;
			const streak = dayNum - i;

			const dayResult = localStorage.getItem(dayKey);

			if (dayResult === null) {
				return streak;
			}

			const dayGameState = JSON.parse(dayResult).gameState;

			if (dayGameState !== 'win') {
				return streak;
			}
		}

		return dayNum;
	}

	function win() {
		gameState = 'win';

		if (browser) {
			localStorage.setItem(day, JSON.stringify({ revealed, gameState, guesses }));
		}

		streak = checkStreak();

		return;
	}

	function handleAnswer(e: SubmitEvent) {
		e.preventDefault();

		guesses.push(answer);
		revealed += 1;

		if (browser) {
			localStorage.setItem(day, JSON.stringify({ revealed, gameState, guesses }));
		}

		if (acceptedGuesses.includes(answer.replaceAll("'", '').toLowerCase())) {
			return win();
		}

		if (
			acceptedGuesses.some((a) => stringSimilarity(a.toLowerCase(), answer.toLowerCase()) >= 0.7)
		) {
			return win();
		}

		if (revealed > 5) {
			gameState = 'loss';
			if (browser) {
				localStorage.setItem(day, JSON.stringify({ revealed, gameState, guesses }));
			}
		}

		answer = '';
	}

	async function copy() {
		let text = `goatpenguin #${dayNum} ${gameState == 'win' ? revealed - 1 : 'X'}/5 \n${page.url.origin}\n\n`;

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
		copied = true;
	}
</script>

<div class="flex min-h-screen w-full flex-wrap justify-center">
	<div class="m-4 flex max-w-3xl flex-col">
		<div
			class="flex h-auto flex-wrap items-center justify-center gap-2
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
				goatpenguin
			</p>

			<p class="shrink-0 font-bold text-white">by Draw</p>
		</div>

		<p class="mt-4 text-white">
			My attempt at a daily game that's something in between <a
				class="inline-block bg-linear-to-r from-blue-400 to-blue-300 bg-clip-text text-transparent underline hover:italic"
				href="https://www.linkedin.com/games/pinpoint">Pinpoint</a
			>
			and
			<a
				class="inline-block bg-linear-to-r from-amber-400 to-green-300 bg-clip-text text-transparent underline hover:italic"
				href="https://catfishing.net/">Catfishing</a
			>. Can you guess the Wikipedia article given five of its categories (in decreasing
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
				<input
					bind:value={answer}
					required
					class="block h-12 w-full"
					placeholder="Place your guess here"
				/>
			</form>

			<div class="mt-2">
				{#each guesses as guess}
					<div class="mb-1 flex border-2 border-white">
						<p class="p-2 text-lg text-white">❌ {guess}</p>
					</div>
				{/each}
			</div>
		{:else if gameState === 'win' || gameState === 'loss'}
			{#if gameState === 'win'}
				<div class="relative mt-4">
					<div class="absolute top-0 left-1/2">
						<Confetti />
					</div>

					<div
						class="relative z-0 flex w-full items-center justify-center border border-green-500 bg-green-800"
					>
						<div class="m-2 flex flex-col text-center">
							<p class="text-xl font-bold text-white">🐐 You go(a)t it!</p>
							{#if streak > 0}
								<p class="text-white">
									Current streak: {streak} day{streak == 1 ? '' : 's'}
								</p>
							{/if}
						</div>
					</div>
				</div>
			{:else if gameState === 'loss'}
				<div
					class="relative z-0 mt-4 flex w-full items-center justify-center border border-red-500 bg-red-800"
				>
					<div class="m-2 flex flex-col text-center">
						<p class="text-xl font-bold text-white">🐧 Not today...</p>
						{#if streak > 0}
							<p class="text-white">
								Current streak: {streak} day{streak == 1 ? '' : 's'}
							</p>
						{/if}
					</div>
				</div>
			{/if}

			<div class="mt-2">
				<a
					class="group flex flex-row items-baseline gap-2"
					href={`https://en.wikipedia.org/wiki/${article}`}
				>
					<svg
						class="shrink-0 fill-white group-hover:fill-blue-400"
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 121 100"
						width="24"
						height="24"
						stroke-miterlimit="10"
						style="shape-rendering:geometricPrecision;fill-rule:evenodd"
					>
						<path
							d="M120.85 29.21c0 .41-.13.78-.38 1.12-.26.33-.53.5-.84.5-2.49.24-4.54 1.04-6.12 2.41-1.59 1.36-3.22 3.97-4.91 7.81L82.8 99.19c-.17.54-.64.81-1.42.81-.61 0-1.08-.27-1.42-.81L65.49 68.93 48.85 99.19c-.34.54-.81.81-1.42.81q-1.11 0-1.47-.81L20.61 41.05q-2.37-5.415-5.01-7.56c-1.75-1.43-4.2-2.32-7.33-2.66-.27 0-.53-.14-.76-.43-.24-.28-.36-.61-.36-.98 0-.95.27-1.42.81-1.42 2.26 0 4.62.1 7.09.3 2.29.21 4.45.31 6.47.31 2.06 0 4.49-.1 7.29-.31 2.93-.2 5.53-.3 7.79-.3.54 0 .81.47.81 1.42 0 .94-.17 1.41-.5 1.41-2.26.17-4.04.75-5.34 1.72-1.3.98-1.95 2.26-1.95 3.85q0 1.215.81 3.03l20.95 47.31 11.89-22.46-11.08-23.23c-1.99-4.14-3.63-6.82-4.91-8.02-1.28-1.19-3.22-1.93-5.82-2.2-.24 0-.46-.14-.68-.43-.22-.28-.33-.61-.33-.98 0-.95.23-1.42.71-1.42 2.26 0 4.33.1 6.22.3 1.82.21 3.76.31 5.82.31 2.02 0 4.16-.1 6.42-.31 2.33-.2 4.62-.3 6.88-.3.54 0 .81.47.81 1.42 0 .94-.16 1.41-.5 1.41-4.52.31-6.78 1.59-6.78 3.85 0 1.01.52 2.58 1.57 4.7l7.33 14.88 7.29-13.61c1.01-1.92 1.52-3.54 1.52-4.86 0-3.1-2.26-4.75-6.78-4.96-.41 0-.61-.47-.61-1.41q0-.51.3-.96c.21-.31.41-.46.61-.46q2.43 0 5.97.3c2.26.21 4.12.31 5.57.31 1.04 0 2.58-.09 4.6-.26 2.56-.23 4.71-.35 6.43-.35.4 0 .6.4.6 1.21q0 1.62-1.11 1.62c-2.63.27-4.75 1-6.35 2.18s-3.6 3.86-5.99 8.04l-9.72 17.97 13.16 26.81 19.43-45.18c.67-1.65 1.01-3.17 1.01-4.55 0-3.31-2.26-5.06-6.78-5.27-.41 0-.61-.47-.61-1.41 0-.95.3-1.42.91-1.42 1.65 0 3.61.1 5.87.3 2.09.21 3.85.31 5.26.31 1.49 0 3.21-.1 5.16-.31 2.03-.2 3.85-.3 5.47-.3.47 0 .71.4.71 1.21"
						/>
					</svg>
					<p class="text-3xl font-bold text-white group-hover:text-blue-400 group-hover:underline">
						{friendly}
					</p>
				</a>
			</div>
			<div class="mt-1">
				{#if img !== null}
					<img
						class="my-2 h-64 w-auto max-w-64 object-contain border border-white p-2 sm:float-none md:float-right md:m-2"
						src={img}
						alt={`${friendly} Wikipedia article image`}
					/>
				{/if}
				<p class="text-white">{blurb}</p>
				<p class="mt-1 text-sm text-gray-400 italic">
					{`Article description${img ? ', categories, and image ' : ' and categories'} from Wikipedia.org.`}
				</p>
			</div>
			<button
				onclick={copy}
				class="active:border-purple:800 mt-2 h-12 w-64 cursor-pointer border border-purple-700 bg-purple-900 text-white hover:border-purple-800 hover:bg-purple-950 active:bg-purple-600"
				>{copied ? 'Copied to clipboard! ✅' : 'Copy game result to clipboard 📋'}</button
			>
		{/if}
	</div>
</div>
