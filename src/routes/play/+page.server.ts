import { isAuthed } from '$lib/server/auth.js';
import { error } from '@sveltejs/kit';

export async function load({ fetch, url, cookies }) {
	const dayAfter = (curr: string, test: string) => {
		// true if we're after the curr date
		const currSplit = curr.split('-').map((s) => Number(s));
		const testSplit = test.split('-').map((s) => Number(s));

		if (currSplit[0] > testSplit[0]) {
			return false;
		}

		if (currSplit[0] == testSplit[0]) {
			if (currSplit[1] > testSplit[1]) {
				return false;
			}

			if (currSplit[1] == testSplit[1]) {
				return currSplit[2] < testSplit[2];
			}
		}

		return true;
	};

	const dayString = url.searchParams.get('day') ?? '';

	const gameRes = await fetch(`/game?day=${dayString}`);
	const game = await gameRes.json();

	if (gameRes.status == 404) {
		error(404, {
			message: "Can't find that goatpenguin..."
		});
	}

	const curr = new Intl.DateTimeFormat('sv-SE', {
		timeZone: 'America/Chicago'
	}).format(new Date());

	if (!isAuthed(cookies.get('admin')) && dayAfter(curr, dayString)) {
		error(403, {
			message: "Can't access future goatpenguins..."
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
