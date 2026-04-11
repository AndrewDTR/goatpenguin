import db from '$lib/db';
import { error, json, type RequestHandler } from '@sveltejs/kit';

type GameRow = {
	article: string;
	friendly: string;
	acceptedGuesses: string;
	day: string;
	dayNum: number;
	categories: string;
	blurb: string;
	img: string;
};

export const GET: RequestHandler = async ({ url }) => {
	const dayString = url.searchParams.get('day');

	if (!dayString) {
		error(404, {
			message: 'You must specify a day for the goatpenguin'
		});
	}

	const statement = db.prepare<string, GameRow>('SELECT * FROM games WHERE id = ?');

	const result: GameRow | undefined = statement.get(dayString);

	if (!result) {
		error(404, {
			message: "Can't find that day's goatpenguin"
		});
	}

	const { article, friendly, acceptedGuesses, day, dayNum, categories, blurb, img, imgSize } = result;
	return json({
		article,
		friendly,
		categories: JSON.parse(categories),
		day,
		dayNum,
		acceptedGuesses: JSON.parse(acceptedGuesses),
		blurb,
		img,
		imgSize
	});
};
