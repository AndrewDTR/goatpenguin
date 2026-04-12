import db from '$lib/db';
import { type Actions } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ params }) => {
	const statement = db.prepare('SELECT * FROM games WHERE dayNum = ?');
	let game = statement.get(params.dayNum);

	if (game === undefined) {
		return {
			categories: ['', '', '', '', ''],
			acceptedGuesses: ['']
		};
	}

	game = {
		...game,
		dayNum: Number(game.dayNum),
		categories: JSON.parse(game.categories)
	};

	return { ...game };
};

export const actions: Actions = {
	update: async (event) => {
		const form = await event.request.formData();
		const dayNum = event.params.dayNum;

		const statement = db.prepare(
			`INSERT INTO games (id, article, friendly, categories, day, dayNum, acceptedGuesses, blurb, img, imgSize)
			VALUES (@id, @article, @friendly, @categories, @day, @dayNum, @acceptedGuesses, @blurb, @img, @imgSize)
			ON CONFLICT(dayNum) DO UPDATE SET
			id = @id,
			article = @article,
			friendly = @friendly,
			categories = @categories,
			day = @day,
			acceptedGuesses = @acceptedGuesses,
			blurb = @blurb,
			img = @img,
			imgSize = @imgSize`
		);

		statement.run({
			id: form.get('id'),
			article: form.get('article'),
			friendly: form.get('friendly'),
			categories: JSON.stringify([
				form.get('0'),
				form.get('1'),
				form.get('2'),
				form.get('3'),
				form.get('4')
			]),
			day: form.get('day'),
			dayNum: dayNum,
			acceptedGuesses: form.get('acceptedGuesses'),
			blurb: form.get('blurb'),
			img: form.get('img'),
			imgSize: form.get('imgSize')
		});
	}
};
