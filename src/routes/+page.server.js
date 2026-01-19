import { redirect } from "@sveltejs/kit";

export async function load({ url }) {
    if (url.host !== 'goatpenguin.com' && url.hostname !== "localhost") {
        redirect(308, 'https://goatpenguin.com');
    }

    const article = "Rubik%27s_Cube";
    const friendly = "Rubik's Cube";
    const acceptedGuesses = ["rubiks cube", "rubik's cube", "rubix cube"];
    const day = "day20";
    const dayNum = 20;

    const categories = ["Single-player games",
        "Hungarian inventions",
        "1980s fads and trends",
        "Educational toys",
        "Logic puzzles",
    ]

    const blurb = `The Rubik's Cube is a 3D combination puzzle invented in 1974 by Hungarian sculptor and professor of architecture Ernő Rubik. Originally called the Magic Cube, the puzzle was licensed by Rubik to be sold by Pentangle Puzzles in the UK in 1978, and then by Ideal Toy Corp in 1980 via businessman Tibor Laczi and Seven Towns founder Tom Kremer. The cube was released internationally in 1980 and became one of the most recognised icons in popular culture. It won the 1980 German Game of the Year special award for Best Puzzle. As of January 2024, around 500 million cubes had been sold worldwide, making it the world's bestselling puzzle game and bestselling toy. The Rubik's Cube was inducted into the US National Toy Hall of Fame in 2014.`;
    const img = "https://upload.wikimedia.org/wikipedia/commons/6/61/Rubiks_cube_solved.jpg";

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
