import { redirect } from "@sveltejs/kit";

export async function load({ url }) {
    if (url.host !== 'goatpenguin.com' && url.hostname !== "localhost") {
        redirect(308, 'https://goatpenguin.com');
    }

    const article = "Tetris";
    const friendly = "Tetris";
    const acceptedGuesses = ["tetris"];
    const day = "day16";
    const dayNum = 16;

    const categories = ["1990s fads and trends",
        "NP-complete problems",
        "Soviet inventions",
        "Video game franchises",
        "Falling block puzzle games",
    ]

    const blurb = `Tetris (Russian: Тетрис) is a puzzle video game created by Alexey Pajitnov, a Soviet software engineer. In typical Tetris gameplay, falling tetromino shapes must be neatly sorted into a pile. Once a horizontal line of the game board is filled in, it disappears, granting points and preventing the pile from overflowing. Since its initial creation, this gameplay has been used in over 220 versions, released for over 70 platforms. Newer versions frequently implement additional game mechanics, some of which have become standard over time. As of December 2024, these versions collectively serve as the second-best-selling video game series with over 520 million sales, mostly on mobile devices.`;
    const img = "https://upload.wikimedia.org/wikipedia/commons/4/46/Tetris_logo.png";

    return {
        article,
        friendly,
        categories,
        day,
        dayNum,
        acceptedGuesses,
        blurb,
        img
    };
}