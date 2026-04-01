<script lang="ts">
	import { browser } from '$app/environment';
	import { page } from '$app/state';
	import { stringSimilarity } from 'string-similarity-js';
	import { Confetti } from 'svelte-confetti';

	const day = 'fakeGP';
	const friendly = "April Fools' Day";
	const article = 'April_Fools%27_Day';
	const blurb = `April Fools' Day or April Fool's Day (rarely called All Fools' Day) is an annual custom in many Western countries on the 1st of April consisting of practical jokes, hoaxes, and pranks. Jokesters often expose their actions by shouting "April Fool[s]!" at the recipient. Mass media can be involved with these pranks, which may be revealed as such the following day. The custom of setting aside a day for playing harmless pranks upon one's neighbor has been relatively common in the world historically.`;
	const img = `https://upload.wikimedia.org/wikipedia/commons/a/a3/Aptenodytes_forsteri_-Snow_Hill_Island%2C_Antarctica_-adults_and_juvenile-8.jpg`;

	const acceptedGuesses = ['april 1st', 'april fools day', 'april fools', 'april fools day'];

	const categories = [
		'Ed Sheeran songs',
		'Maritime incidents in August 1862',
		'1582 in politics',
		'People from Columbiana, Alabama',
		'Magical girl video games',
		'Organizations based in Yokohama',
		'Light Records albums',
		'Llandovery',
		'2014\u201315 Scottish Professional Football League',
		'Bowling at the SEA Games',
		'Cantopop video albums',
		'Paragon Programming games',
		'Archaeological sites in Garrett County, Maryland',
		'Films directed by \u00c9rik Canuel',
		'Law enforcement stubs',
		'Christian denominations in Malawi',
		'Music of Vanuatu',
		'UT Tyler Patriots',
		'Suspected Wikipedia sockpuppets of vezaso',
		'Antena Interna\u021bional',
		'Verve Music Group',
		'Footballers from Navarre',
		'People acquitted of fraud',
		'Choral compositions',
		'Peerless Records artists',
		'Tommy Hilfiger (company)',
		'1841 in United States case law',
		'Molluscs described in 1945',
		'Translators of Mario Vargas Llosa',
		'Plateaus of Egypt',
		'December 1990 sports events in the United Kingdom',
		'Actors from Galicia (Spain)',
		'Novels by Kobo Abe',
		'Australian bioinformaticians',
		'Dance in China',
		'Unknown-importance Oceania road transport articles',
		'Taxa named by August Thienemann',
		'User en-simple-4',
		'Reserve team football in Poland',
		'Politics of Flevoland',
		'Burials at Ivry Cemetery',
		'Unincorporated communities in Cedar County, Nebraska',
		'Protected areas of York County, Virginia',
		'Basketball players from Warsaw',
		'Ambassadors of Finland to South Korea',
		'April 2002 in Australia',
		'Disambig-Class Historic sites pages',
		'Holland High School (Michigan) alumni',
		'Literary museums in Jamaica',
		'Kalasha Valleys',
		'United States Virgin Islands marathon runners',
		'Treaties extended to Vanuatu',
		'2013 in Lithuania',
		'People from La Madeleine, Nord',
		'Nordic combined skiers at the 1968 Winter Olympics',
		'Former electoral divisions of Tasmania',
		'Maldivian crime films',
		'Wikipedia articles with plot summary needing attention from June 2010',
		'Youth in Puerto Rico',
		'Serbian Democratic Party (Bosnia and Herzegovina) politicians',
		'Sports venues completed in 1971',
		'Equatoguinean basketball players',
		'File-Class Eclipses pages',
		'People from Falkenberg/Elster',
		'Church of Sweden',
		'November 1904',
		'Premier League matches',
		"2018 in women's road cycling",
		'Environmental organisations by year of establishment',
		'Caves of Latvia',
		'Azerbaijani expatriate sportspeople in Finland',
		'Songs written by Fraser T. Smith',
		'Spanish satirists',
		'1951 in Germany',
		'Tourism in Kiribati',
		'Years of the 16th century in the Polish\u2013Lithuanian Commonwealth',
		'The Country Gentlemen',
		'British Columbia provincial electoral districts on Vancouver Island',
		'Wikipedia sockpuppets of Blayttlyjg',
		"1987\u201388 Mid-Eastern Athletic Conference men's basketball season",
		'Anglo-Catholic churches in Leicestershire',
		'1967 in Colombian sport',
		'English knights by type or order of chivalry',
		'Bodies of water of Jefferson County, Alabama',
		'Songs written by Rob Bolland',
		'Online dating services of India',
		'Electoral geography of the United States',
		"Women's suffrage in Oregon",
		'June 2013 sports events',
		'FM-Class Saints articles',
		'Togolese emigrants to Germany',
		'Decades in Ghana',
		'Gulf Coast Premier League players',
		'People from Dakshin Dinajpur district',
		'1996 establishments in Mongolia',
		'Mathematical logic organisations',
		'Canadian indie rock groups',
		'National Register of Historic Places in Gibson County, Tennessee',
		'1906 North Carolina elections',
		'Sports drama films by language',
		'Populated places in DeKalb County, Illinois',
		'Danish royal consorts',
		'Wikipedia sockpuppets of Colassww',
		'Music videos directed by Charles Wittenmeier',
		'Religious buildings and structures completed in the 1850s',
		'1698 in the arts',
		'Athletes (track and field) at the 1987 Pan American Games',
		'Albums produced by Petit Biscuit',
		'Unsolved murders in India',
		'Sports venues in Malaysia by populated place',
		'Slovak clergy',
		'2019 Asian domestic association football cups',
		'Latin Grammy Awards for traditional music',
		'1295 establishments',
		'Sockens in Sweden',
		'No Secrets (musical group) albums',
		'Christian denominations in Myanmar',
		'International cricket competitions from 1888\u201389 to 1918',
		'Articles containing Kukna-language text',
		'1973 in Slovenia',
		'FL-Class Indian music articles of Low-importance',
		'Soccer competitions in the United States',
		'Olympic tennis players for Belgium',
		'Hyde United F.C. templates',
		'2017 establishments in Oklahoma',
		'Lists of 1976 films by country',
		'Hospitals established in 2020',
		'1788 sculptures',
		'Dutch people of the American Revolution',
		'Mayors of Fairfield, New South Wales',
		'Bantu (band) albums',
		'Populated places in the Islands Region',
		'Members of Thames Valley Harriers',
		'People from Bagratid Armenia',
		'1876 in Irish sport',
		'Jamaican women dramatists and playwrights',
		'Swinford Gaelic footballers',
		'Women art historians',
		'Magazines established in 1912',
		'Science and technology in Victoria (state)',
		'2009 Moorilla Hobart International',
		'July 2020 events in Ethiopia',
		'Ambassadors of Lithuania to the Holy See',
		'Libraries established in 1947',
		'1082 in England',
		'Disambig-Class Trinidad and Tobago pages',
		'Canadian travel books',
		'1711 in law',
		'September 1882 events',
		'Eastern Mountain Coal Fields task force participants',
		'Private schools in Wiltshire',
		"JDE Peet's",
		'MTU Kerry Gaelic footballers',
		'1992 plays',
		'People from Kingfisher County, Oklahoma',
		'1963 Mid-American Conference baseball season',
		"1969-70 NCAA University Division men's basketball independents season",
		'German male silent film actors',
		'Government of South Korea',
		'Lists of mass media in Ecuador',
		'Art museums and galleries in Wiltshire',
		'XFL user templates',
		'Al Taawoun FC players',
		'Anime and manga set in London',
		'Sunny Day Real Estate members',
		'Actors from Hot Spring County, Arkansas',
		'Musical groups established in 1845',
		'International sports by period',
		'Estonian women guitarists',
		'Use Hong Kong English from July 2024',
		'Suspected Wikipedia sockpuppets of Seulgi-wonyoung',
		'2002 live albums',
		'Taxa named by \u00c9mile Oustalet',
		'Tribe of Issachar',
		'1692 establishments in North America',
		'Religion in Djibouti',
		'July 1926 sports events in North America',
		'Italian male golfers',
		'December 2014 in Germany',
		'Venezuelan chess players',
		'Chicago Express players',
		'Philippine companies established in 2008',
		'Women in the French Wars of Religion',
		'Schools in the Borough of North East Lincolnshire',
		'Caves of Timor-Leste',
		'Politicians from Eastern Region (Ghana)',
		'Films directed by Umetsugu Inoue',
		'1835 establishments in the Spanish Empire',
		'Cricket in the Americas',
		"Ashland Eagles men's soccer",
		'1st-century deaths',
		"2022\u201323 West Coast Conference men's basketball season",
		'Godzilla television series',
		'Women in Pahang',
		'1948 establishments in Israel',
		'Sport in Uzhhorod',
		'Articles containing French-language text',
		'Taiwanese people of English descent',
		'Oklahoma Panhandle State Aggies athletic directors',
		'1988 Japanese television seasons'
	];

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
		900: 'bg-indigo-900 border-indigo-950',
		1000: 'bg-indigo-950 border-gray-700'
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
		}
	}

	function win() {
		gameState = 'win';

		if (browser) {
			localStorage.setItem(day, JSON.stringify({ revealed, gameState, guesses }));
		}

		return;
	}

	function handleAnswer(e: SubmitEvent) {
		e.preventDefault();

		guesses.push(answer);
		revealed += 1;

		if (browser) {
			localStorage.setItem(day, JSON.stringify({ revealed, gameState, guesses }));
		}

		const normalizedAnswer = answer.replaceAll("'", '').replaceAll("'", '').toLowerCase().trim();

		if (acceptedGuesses.includes(normalizedAnswer)) {
			return win();
		}

		if (acceptedGuesses.some((a) => stringSimilarity(a.toLowerCase(), normalizedAnswer) >= 0.7)) {
			return win();
		}

		if (revealed > 20) {
			return win();
		}

		answer = '';
	}

	async function copy() {
		let text = `goatpenguin? ${revealed - 1}/??? \n${page.url.origin}\n\n`;

		text += '🐐🐧🐐🐧🐐🐧 🎉 🐐🐧🐐🐧🐐🐧';

		await navigator.clipboard.writeText(text);
		copied = true;
	}
</script>

<div class="flex min-h-screen w-full flex-wrap justify-center">
	<div class="m-4 flex max-w-3xl flex-col">
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
				goatpenguin
			</p>

			<p class="shrink-0 font-bold text-white">
				by <a class="underline hover:italic" href="https://www.amoses.dev">Andrew</a>
			</p>
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
				{#each categories as category, idx (idx)}
					{#if revealed <= 5 ? idx < 5 : idx < revealed + 1}
						<div
							class={`${idx == revealed - 1 ? 'font-bold' : ''} flex h-12 w-full items-center justify-center border text-white italic ${idx < 5 ? bgClass[500 + idx * 100] : bgClass[1000]}`}
						>
							{idx <= revealed - 1 ? category : '???'}
						</div>
					{/if}
				{/each}
			</div>

			<form class="mt-4 flex w-full" onsubmit={handleAnswer}>
				<input
					bind:value={answer}
					required
					class="block h-12 w-full border border-r-0 border-gray-500"
					placeholder="Place your guess here"
				/>
				<button
					class="w-12 cursor-pointer border border-l-0 border-gray-500 bg-gray-300 hover:bg-gray-400"
					>⏎</button
				>
			</form>

			<div class="mt-2">
				{#each guesses as guess, idx (idx)}
					<div class="mb-1 flex border-2 border-white">
						<p class="p-2 text-lg text-white">❌ {guess}</p>
					</div>
				{/each}
			</div>
		{:else if gameState === 'win'}
			<div class="relative mt-4">
				<div class="absolute top-0 left-1/2">
					<Confetti />
				</div>

				<div
					class="relative z-0 flex w-full items-center justify-center border border-pink-500 bg-pink-800"
				>
					<div class="m-2 flex flex-col text-center">
						<p class="text-xl font-bold text-white">🐐 Happy April Fools' Day! 🐧</p>
					</div>
				</div>
			</div>

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
						class="my-2 h-72 w-auto border border-white p-2 sm:float-none md:float-right md:m-2"
						src={img}
						alt={`${friendly} Wikipedia article image`}
					/>
				{/if}
				{#if typeof blurb === 'string'}
					<p class="text-white">{blurb}</p>
				{:else if Array.isArray(blurb)}
					{#each blurb as paragraph (paragraph)}
						<p class="mb-4 text-white">{paragraph}</p>
					{/each}
				{/if}
				<p class="mt-1 text-sm text-gray-400 italic">
					Article description and categories from Wikipedia.org.
				</p>
			</div>
			<button
				onclick={copy}
				class="active:border-purple:800 mt-2 h-12 w-64 cursor-pointer border border-purple-700 bg-purple-900 text-white hover:border-purple-800 hover:bg-purple-950 active:bg-purple-600"
				>{copied ? 'Copied to clipboard! ✅' : 'Copy game result to clipboard 📋'}</button
			>

			<details class="mt-2 text-white">
				<summary class="text-gray-400 underline">View hints and guesses</summary>
				<div class="mt-2">
					{#each categories.slice(0, revealed - 1) as category, idx (idx)}
						<div
							class={`flex h-12 w-full items-center justify-center border text-white italic ${idx < 5 ? bgClass[500 + idx * 100] : bgClass[1000]} border-dashed`}
						>
							{category}
						</div>
					{/each}
				</div>

				<div class="mt-2">
					{#each guesses.slice(0, guesses.length - 1) as guess, idx (idx)}
						<div class="flex border-2 border-dashed border-white">
							<p class="p-2 text-lg text-white">❌ {guess}</p>
						</div>
					{/each}
					{#if guesses.length > 0}
						<div class="flex border-2 border-dashed border-white">
							<p class="p-2 text-lg text-white">✅ {guesses[guesses.length - 1]}</p>
						</div>
					{/if}
				</div>
			</details>
		{/if}
	</div>
</div>
