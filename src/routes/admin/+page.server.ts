import db from '$lib/db';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
	const statement = db.prepare('SELECT * FROM GAMES');
	const games = statement.all().map((game: any) => ({
		...game,
		categories: JSON.parse(game.categories),
		acceptedGuesses: JSON.parse(game.acceptedGuesses)
	}));

	return {
		games
	};
};
