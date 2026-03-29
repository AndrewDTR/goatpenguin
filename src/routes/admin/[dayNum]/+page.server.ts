import db from '$lib/db';
import { type Actions } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ params }) => {
	const statement = db.prepare('SELECT * FROM games WHERE dayNum = ?');
	let game = statement.get(params.dayNum);

	if (game === undefined) {
		return {
			categories: ["", "", "", "", ""],
			acceptedGuesses: [""]
		}
	}

	game = {
		...game,
		categories: JSON.parse(game.categories),
		acceptedGuesses: JSON.parse(game.acceptedGuesses)
	};

	return { ...game };
};

export const actions: Actions = {
	update: async (event) => {
		const form = await event.request.formData();
		
		// does the current day exist 
		const statement = db.prepare('SELECT * FROM games WHERE dayNum = ?');
		let game = statement.get(form.get("id"));

		// if (game === undefined) {
		// 	const insert = 
		// }
	}
};