import { error } from '@sveltejs/kit';

export async function load({ fetch, url }) {
	const dayString = url.searchParams.get("day")

	const gameRes = await fetch(`/game?day=${dayString}`);
	const game = await gameRes.json();

	if (gameRes.status == 404) {
		error(404, {
			message: "Can't find today's goatpenguin..."
		});
	}

	const { article, friendly, acceptedGuesses, day, dayNum, categories, blurb, img, imgSize } = game;

	return {
		article,
		friendly,
		categories,
		day,
		dayNum,
		acceptedGuesses,
		blurb,
		img,
		imgSize
	};
}
