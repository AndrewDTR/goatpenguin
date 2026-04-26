import db from "$lib/db";
import type { RequestHandler } from "@sveltejs/kit";

export const DELETE: RequestHandler = async ({ url }) => {
    const game = url.searchParams.get('game');

    const statement = db.prepare(`DELETE FROM games WHERE dayNum = ?`);

    statement.run(game);

    return new Response();
};