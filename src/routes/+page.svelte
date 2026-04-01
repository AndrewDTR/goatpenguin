<script lang="ts">
	import { browser } from '$app/environment';
	
	const day = "fakeGP";
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

	function handleAnswer(e: SubmitEvent) {
		e.preventDefault();

		guesses.push(answer);
		revealed += 1;

		if (browser) {
			localStorage.setItem(day, JSON.stringify({ revealed, gameState, guesses }));
		}

		answer = '';
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

		<div class="mt-4">
			{#each categories as category, idx (idx)}
				{#if (revealed <= 5 ? (idx < 5) : (idx < revealed + 1))}
					<div
						class={`${idx == revealed - 1 ? 'font-bold' : ''} flex h-12 w-full items-center justify-center border text-white italic ${idx < 5 ? (bgClass[500 + idx * 100]) : (bgClass[1000])}`}
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
	</div>
</div>
