import db from "$lib/db";
import { isAuthed } from "$lib/server/auth";
import { json, type RequestHandler } from "@sveltejs/kit";

export const GET: RequestHandler = async ({ url, fetch }) => {
    const day = url.searchParams.get("day");

    if (!day) {
        return json({
            "error": "Provide a day."
        })
    }

    const gameRes = await fetch(`/game?day=${day}`);
    const game = await gameRes.json();
    return json(game);
};

export const POST: RequestHandler = async ({ request }) => {
    if (!isAuthed(request.headers.get("authorization"))) {
        return json({
            "error": "Not authed"
        });
    }

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

    const body = await request.json();

    statement.run(
        body
    );

    return json({
        "ok": true
    });
};